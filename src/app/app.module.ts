import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';

import { appRoutingProviders, routing}from "./app.routing";
import { HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './components/search/search.component';
import { TwittGridComponent } from './components/twitt-grid/twitt-grid.component';
import { TwittDescriptionComponent } from './components/twitt-description/twitt-description.component';
import {RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings} from "ng-recaptcha";
import {RecaptchaEnv} from "./env/recaptcha.env";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    SearchComponent,
    TwittGridComponent,
    TwittDescriptionComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [appRoutingProviders,  {
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: RecaptchaEnv.key
    } as RecaptchaSettings
  }],
  bootstrap: [AppComponent]
})

// @ts-ignore
export class AppModule {

}
