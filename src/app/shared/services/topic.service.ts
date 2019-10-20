import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class TopicService {
  topicData: Object = {};
  topicImg: any = []; 
  
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`https://2gatherapi.abmdemo.me/api/topic/category?language=1`)
  }

  postTopicData(data){
    return this.http.post('https://2gatherapi.abmdemo.me/api/topic', data)
  }

  getToken() {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return null;
    }
  }
}
