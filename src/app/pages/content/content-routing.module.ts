import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "./content.component";
import { LocationCategoryComponent } from './location-category/location-category.component';
import { TopicContentComponent } from './topic-content/topic-content.component';
import { MediaComponent } from './media/media.component';
import { PreviewComponent } from './preview/preview.component';


const routes: Routes = [
  {path: '', component: ContentComponent, children: [
    {path: '', redirectTo: 'location-category', pathMatch: 'full'},
    {path: 'location-category', component: LocationCategoryComponent },
    {path: 'topic-content', component: TopicContentComponent },
    {path: 'media', component: MediaComponent },
    {path: 'preview', component: PreviewComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }