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
var topic_service_1 = require("../../../shared/services/topic.service");
var router_1 = require("@angular/router");
var MediaComponent = /** @class */ (function () {
    function MediaComponent(topicService, router) {
        this.topicService = topicService;
        this.router = router;
        this.show = 'show';
        this.testImg = '';
        this.uploadFiles = [];
        // if(!topicService.topicData['title'])
        //   this.router.navigate(['content/topic-content']);
    }
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent.prototype.setFile = function (e) {
        var _this = this;
        var img = e.target.files[0];
        this.uploadFiles.push(img);
        var reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = function (event) {
            _this.testImg = event.target.result;
        };
    };
    MediaComponent.prototype.showSlide = function () {
        this.show = '';
    };
    MediaComponent.prototype.hideSlide = function () {
        this.show = 'show';
    };
    MediaComponent = __decorate([
        core_1.Component({
            selector: 'app-media',
            templateUrl: './media.component.html',
            styleUrls: ['./media.component.css']
        }),
        __metadata("design:paramtypes", [topic_service_1.TopicService, router_1.Router])
    ], MediaComponent);
    return MediaComponent;
}());
exports.MediaComponent = MediaComponent;
//# sourceMappingURL=media.component.js.map