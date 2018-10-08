import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from "./auth.routing";
import { AuthComponent } from './auth.component';

//import { Http, RequestOptions } from '@angular/http';
//import { AuthHttp, AuthConfig } from 'angular2-jwt';

//function authHttpServiceFactory(http: Http, options: RequestOptions) {
//  return new AuthHttp(new AuthConfig(), http, options);
//}

@NgModule({
  imports: [
    CommonModule,

    routing,
  ],
  declarations: [ AuthComponent]
//  providers: [
//    {
//      provide: AuthHttp,
//      useFactory: authHttpServiceFactory,
//      deps: [Http, RequestOptions]
//    }
//  ]

})
export class AuthModule { }
