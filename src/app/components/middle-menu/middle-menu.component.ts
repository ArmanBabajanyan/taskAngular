import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../shared/services/topic.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-middle-menu',
  templateUrl: './middle-menu.component.html',
  styleUrls: ['./middle-menu.component.css']
})
export class MiddleMenuComponent implements OnInit {
  location: string;
  topContent: string;
  media: string;
  preview: string;

  constructor(private topicService: TopicService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(url => {
      if (this.topicService.topicData['address']) {
        this.topContent = 'bold'
        this.location = 'check bold'
      }
      if (this.topicService.topicData['title']) {
        this.topContent = 'check bold'
        this.media = 'bold'
      }
      if (this.topicService.topicData['file']) {
        this.media = 'check bold'
        this.preview = 'check bold'
      }
    })
  }

}
