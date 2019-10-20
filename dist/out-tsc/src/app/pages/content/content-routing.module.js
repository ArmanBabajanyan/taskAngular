"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var content_component_1 = require("./content.component");
var location_category_component_1 = require("./location-category/location-category.component");
var topic_content_component_1 = require("./topic-content/topic-content.component");
var media_component_1 = require("./media/media.component");
var routes = [
    { path: '', component: content_component_1.ContentComponent, children: [
            { path: '', redirectTo: 'location-category', pathMatch: 'full' },
            { path: 'location-category', component: location_category_component_1.LocationCategoryComponent },
            { path: 'topic-content', component: topic_content_component_1.TopicContentComponent },
            { path: 'media', component: media_component_1.MediaComponent },
        ] },
];
var ContentRoutingModule = /** @class */ (function () {
    function ContentRoutingModule() {
    }
    ContentRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ContentRoutingModule);
    return ContentRoutingModule;
}());
exports.ContentRoutingModule = ContentRoutingModule;
//# sourceMappingURL=content-routing.module.js.map