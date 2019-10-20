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
var topic_service_1 = require("../../shared/services/topic.service");
var router_1 = require("@angular/router");
var MiddleMenuComponent = /** @class */ (function () {
    function MiddleMenuComponent(topicService, router) {
        this.topicService = topicService;
        this.router = router;
    }
    MiddleMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (url) {
            if (_this.topicService.topicData['address']) {
                _this.topContent = 'bold';
                _this.location = 'check bold';
            }
            if (_this.topicService.topicData['title']) {
                _this.topContent = 'check bold';
                _this.media = 'bold';
            }
        });
    };
    MiddleMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-middle-menu',
            templateUrl: './middle-menu.component.html',
            styleUrls: ['./middle-menu.component.css']
        }),
        __metadata("design:paramtypes", [topic_service_1.TopicService, router_1.Router])
    ], MiddleMenuComponent);
    return MiddleMenuComponent;
}());
exports.MiddleMenuComponent = MiddleMenuComponent;
//# sourceMappingURL=middle-menu.component.js.map