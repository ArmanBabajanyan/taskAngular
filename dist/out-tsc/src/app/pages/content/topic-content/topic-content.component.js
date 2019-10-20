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
var forms_1 = require("@angular/forms");
var topic_service_1 = require("../../../shared/services/topic.service");
var router_1 = require("@angular/router");
var TopicContentComponent = /** @class */ (function () {
    function TopicContentComponent(topicService, router) {
        this.topicService = topicService;
        this.router = router;
        this.checked = false;
        // if(!topicService.topicData['address'])
        //   this.router.navigate(['content/location-category']);
    }
    TopicContentComponent.prototype.ngOnInit = function () {
        this.topicForm = new forms_1.FormGroup({
            title: new forms_1.FormControl('', [forms_1.Validators.required]),
            description: new forms_1.FormControl('', [forms_1.Validators.minLength(500)]),
            amount: new forms_1.FormControl('', [this.amountValidator]),
        });
    };
    TopicContentComponent.prototype.amountValidator = function (control) {
        var regEx = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/g;
        if (regEx.test(String(control.value).toLowerCase())) {
            return null;
        }
        else {
            return { 'amount': true };
        }
    };
    TopicContentComponent.prototype.count = function (e) {
        this.textCount = e.length;
    };
    TopicContentComponent.prototype.checkCheckBoxvalue = function (e) {
        this.topicForm.get('amount').clearValidators();
        if (e.target.checked == true)
            console.log(e.target.checked);
    };
    TopicContentComponent.prototype.topicData = function () {
        var data = Object.assign(this.topicForm.value, this.topicService.topicData);
        this.topicService.topicData = data;
        this.router.navigate(['content/media']);
    };
    TopicContentComponent = __decorate([
        core_1.Component({
            selector: 'app-topic-content',
            templateUrl: './topic-content.component.html',
            styleUrls: ['./topic-content.component.css']
        }),
        __metadata("design:paramtypes", [topic_service_1.TopicService, router_1.Router])
    ], TopicContentComponent);
    return TopicContentComponent;
}());
exports.TopicContentComponent = TopicContentComponent;
//# sourceMappingURL=topic-content.component.js.map