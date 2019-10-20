"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@agm/core");
var environment_1 = require("../../../../environments/environment");
var forms_1 = require("@angular/forms");
var topic_service_1 = require("../../../shared/services/topic.service");
var router_1 = require("@angular/router");
var ENV = environment_1.environment;
var LocationCategoryComponent = /** @class */ (function () {
    function LocationCategoryComponent(mapsAPILoader, ngZone, topicService, router) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.topicService = topicService;
        this.router = router;
        this.zoom = 12;
        this.API_KEY = ENV.API_KEY;
        this.API_URL = ENV.API_URL;
    }
    LocationCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catForm = new forms_1.FormGroup({
            categoryId: new forms_1.FormControl(''),
            address: new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.topicService.getCategories().subscribe(function (cat) {
            _this.categories = cat['data'];
            _this.catForm.controls['categoryId'].setValue(_this.categories[0]['id']);
        });
        this.setCurrentPosition();
        this.mapsAPILoader.load().then(function () {
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.lat = place.geometry.location.lat();
                    _this.lng = place.geometry.location.lng();
                    _this.zoom = 12;
                    var map = new google.maps.LatLng(_this.lat, _this.lng);
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ 'location': map }, function (results, status) {
                        _this.catForm.controls['address'].setValue(results[0].formatted_address);
                    });
                });
            });
        });
    };
    LocationCategoryComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 8;
                var map = new google.maps.LatLng(_this.lat, _this.lng);
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'location': map }, function (results, status) {
                    _this.catForm.controls['address'].setValue(results[0].formatted_address);
                });
            });
        }
    };
    LocationCategoryComponent.prototype.topicData = function () {
        var data = Object.assign(this.catForm.value, { lat: this.lat, lng: this.lng });
        this.topicService.topicData = data;
        this.router.navigate(['content/topic-content']);
    };
    __decorate([
        core_1.ViewChild("search"),
        __metadata("design:type", core_1.ElementRef)
    ], LocationCategoryComponent.prototype, "searchElementRef", void 0);
    LocationCategoryComponent = __decorate([
        core_1.Component({
            selector: 'app-location-category',
            templateUrl: './location-category.component.html',
            styleUrls: ['./location-category.component.css']
        }),
        __metadata("design:paramtypes", [core_2.MapsAPILoader,
            core_1.NgZone,
            topic_service_1.TopicService,
            router_1.Router])
    ], LocationCategoryComponent);
    return LocationCategoryComponent;
}());
exports.LocationCategoryComponent = LocationCategoryComponent;
//# sourceMappingURL=location-category.component.js.map