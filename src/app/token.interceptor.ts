import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { TopicService } from './shared/services/topic.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private topicService: TopicService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.topicService.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer '+ localStorage.getItem('token')
        }
      });
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}