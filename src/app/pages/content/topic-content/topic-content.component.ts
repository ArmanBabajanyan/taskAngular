import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {Router} from "@angular/router";

import { TopicService } from '../../../shared/services/topic.service';

@Component({
  selector: 'app-topic-content',
  templateUrl: './topic-content.component.html',
  styleUrls: ['./topic-content.component.css']
})

export class TopicContentComponent implements OnInit {
  topicForm: FormGroup;
  textCount: any;
  checked: boolean = false

  constructor(private topicService: TopicService,private router: Router) { 
    if(!topicService.topicData['address'])
      this.router.navigate(['content/location-category']);
  }

  ngOnInit() {
    this.topicForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.minLength(500)]),
      amount: new FormControl('',[Validators.required,Validators.pattern(/^(^[0][1-9]+)|([1-9]\d*)/g)]),
    })
  }

  count(e){
    this.textCount = e.length
  }

  checkCheckBoxvalue(e){
    if(e.target.checked == true){
      this.topicForm.get('amount').clearValidators()
      this.topicForm.get('amount').updateValueAndValidity()
      this.topicForm.get('amount').setValue('')
    }else{
      this.topicForm.get('amount').setValidators([Validators.pattern(/^(^[0][1-9]+)|([1-9]\d*)/g),Validators.required])
      this.topicForm.get('amount').updateValueAndValidity()
    }
  }

  topicData() {
    let data = Object.assign(this.topicForm.value, this.topicService.topicData);
    this.topicService.topicData = data;
    this.router.navigate(['content/media']);
  }

}
