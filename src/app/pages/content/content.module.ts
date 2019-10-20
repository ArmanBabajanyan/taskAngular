import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { LocationCategoryComponent } from './location-category/location-category.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MiddleMenuComponent } from '../../components/middle-menu/middle-menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import {ReactiveFormsModule} from "@angular/forms";
import { TopicContentComponent } from './topic-content/topic-content.component';
import { MediaComponent } from './media/media.component';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBrZcAFat6HPoli5mZVKJ397CBpk8IJvj0',
      libraries: ['places', 'geometry']
    })
  ],
  declarations: [
    ContentComponent, 
    LocationCategoryComponent,
    HeaderComponent,
    MiddleMenuComponent,
    FooterComponent,
    TopicContentComponent,
    MediaComponent,
    PreviewComponent
  ]
})
export class ContentModule { }

