import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { TopicService } from '../../../shared/services/topic.service';



@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit {
  show: boolean = false;
  images: any = [];
  uploadFiles: File[] = [];
  imgIndex: number;

  constructor(private topicService: TopicService, private router: Router) {
    if (!topicService.topicData['title'])
      this.router.navigate(['content/topic-content']);
  }

  ngOnInit() {
  }

  setFile(e) {
    let img = e.target.files[0]
    this.uploadFiles.push(img)
    let reader = new FileReader()
    reader.readAsDataURL(img)
    reader.onload = event => {
      this.images.push(event.target['result'])
    }
  }

  deleteImg(index) {
    this.uploadFiles.splice(index, index + 1);
    this.images.splice(index, index + 1);
  }

  showSlide(index) {
    this.imgIndex = index;
    this.show = true;
  }

  hideSlide(e) {
    if (e.target == e.currentTarget) {
      this.show = false
    }
  }

  changeSlideImg(type) {
    if (type == 'next') {
      if (this.imgIndex !== this.images.length - 1)
        this.imgIndex++
      else
        this.imgIndex = 0
    } else
      if (this.imgIndex !== 0)
        this.imgIndex--
      else
        this.imgIndex = this.images.length - 1
  }

  topicData() {
    let data = Object.assign(this.topicService.topicData, { file: this.uploadFiles });
    this.topicService.topicData = data;
    this.topicService.topicImg = this.images
    this.router.navigate(['content/preview']);
  }

}
