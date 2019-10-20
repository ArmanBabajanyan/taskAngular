"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var content_component_1 = require("./content.component");
var content_routing_module_1 = require("./content-routing.module");
var location_category_component_1 = require("./location-category/location-category.component");
var header_component_1 = require("../../components/header/header.component");
var middle_menu_component_1 = require("../../components/middle-menu/middle-menu.component");
var footer_component_1 = require("../../components/footer/footer.component");
var core_2 = require("@agm/core");
var forms_1 = require("@angular/forms");
var topic_content_component_1 = require("./topic-content/topic-content.component");
var media_component_1 = require("./media/media.component");
var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                content_routing_module_1.ContentRoutingModule,
                forms_1.ReactiveFormsModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBrZcAFat6HPoli5mZVKJ397CBpk8IJvj0',
                    libraries: ['places', 'geometry']
                })
            ],
            declarations: [
                content_component_1.ContentComponent,
                location_category_component_1.LocationCategoryComponent,
                header_component_1.HeaderComponent,
                middle_menu_component_1.MiddleMenuComponent,
                footer_component_1.FooterComponent,
                topic_content_component_1.TopicContentComponent,
                media_component_1.MediaComponent
            ]
        })
    ], ContentModule);
    return ContentModule;
}());
exports.ContentModule = ContentModule;
//# sourceMappingURL=content.module.js.map