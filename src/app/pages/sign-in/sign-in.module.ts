import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRoutingModule } from './sign-in-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

import { SignInComponent } from './sign-in.component';



@NgModule({
    imports: [
        CommonModule,
        SignInRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [SignInComponent]
})
export class SignInModule { }