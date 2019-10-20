import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { MapsAPILoader } from '@agm/core';

import { environment } from '../../../../environments/environment';
import { TopicService } from '../../../shared/services/topic.service';

const ENV = environment;

@Component({
  selector: 'app-location-category',
  templateUrl: './location-category.component.html',
  styleUrls: ['./location-category.component.css']
})

export class LocationCategoryComponent implements OnInit {
  API_KEY: string;
  API_URL: string;
  zoom: number = 12;
  lat: number;
  lng: number;
  geoCoder: any;
  catForm: FormGroup;
  categories: string[];


  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private topicService: TopicService,
    private router: Router
  ) {
    this.API_KEY = ENV.API_KEY;
    this.API_URL = ENV.API_URL;
  }

  ngOnInit() {
    this.catForm = new FormGroup({
      categoryId: new FormControl(''),
      address: new FormControl('', [Validators.required])
    });

    this.topicService.getCategories().subscribe(cat => {
      this.categories = cat['data'];
      this.catForm.controls['categoryId'].setValue(this.categories[0]['id'])
    });

    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          };

          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
          const map = new google.maps.LatLng(this.lat, this.lng);
          const geocoder = new google.maps.Geocoder();

          geocoder.geocode({ 'location': map }, (results, status) => {
            this.catForm.controls['address'].setValue(results[0].formatted_address);
          });
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 8;
        const map = new google.maps.LatLng(this.lat, this.lng);
        const geocoder = new google.maps.Geocoder();

        geocoder.geocode({ 'location': map }, (results, status) => {
          this.catForm.controls['address'].setValue(results[0].formatted_address);
        })
      });
    }
  }

  topicData() {
    let data = Object.assign(this.catForm.value, { lat: this.lat, lng: this.lng });
    this.topicService.topicData = data;
    this.router.navigate(['content/topic-content']);
  }

}
