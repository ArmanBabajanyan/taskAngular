import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { TopicService } from '../../../shared/services/topic.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  images: any = []; 
  topicData: any;
  showSuccess: boolean = false;

  constructor(private topicService: TopicService,private router: Router) {
    if(!topicService.topicData['file'])
      this.router.navigate(['content/media']);
   }

  ngOnInit() {
    this.images = this.topicService.topicImg
    this.topicData = this.topicService.topicData
  }

  show(){
  }

  hide(e){
    if (e.target == e.currentTarget){
      this.showSuccess = false
    }
  }

  setData(){
    let topicData: FormData = new FormData();
    topicData.append('categoryId', this.topicData.categoryId);
    topicData.append('address', this.topicData.address);
    topicData.append('lat', this.topicData.lat);
    topicData.append('lng', this.topicData.lng);
    topicData.append('title', this.topicData.title);
    topicData.append('description', this.topicData.description);
    if(this.topicData.amount)
      topicData.append('amount', this.topicData.amount);
    this.topicData.file.forEach(element => {
      topicData.append('file', element);
    });

    this.topicService.postTopicData(topicData).subscribe(e => {
      this.showSuccess = true
    })

  }

}
