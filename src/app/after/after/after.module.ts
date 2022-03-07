import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterComponent } from './after.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReformatHttpResponseInterceptor } from '../../shared/reformat-http-response.interceptor.service';

@NgModule({
  declarations: [
    AfterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ReformatHttpResponseInterceptor,
    multi: true
  }],
})
export class AfterModule { }
