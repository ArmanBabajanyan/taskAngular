import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  signIn(data) {
    return this.http.post('https://2gatherapi.abmdemo.me/api/auth/login', data)
  }
}
