import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { SignInService } from '../../shared/services/sign-in.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  wrongAccsess: string;
  showPassType: string = 'password';

  constructor(private signInService: SignInService, private router: Router) {

   }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', [Validators.required])
    })
  }

  signIn() {
    let data =  Object.assign(this.signInForm.value, {osType: 3})
    this.signInService.signIn(data).subscribe((user: any) => {
      if(user.success == true){
        localStorage.setItem('token', user.data.authToken);
        localStorage.setItem('success', user.success);
        this.router.navigate(['content'])
      }else{
        this.wrongAccsess = user.message
      }
    })
  }

  showPass(){
    if(this.showPassType == 'password')
      this.showPassType = 'text'
    else
      this.showPassType = 'password'
  }

}
