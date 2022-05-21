import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { UserNameComponent } from './auth/user-name/user-name.component';
import { HomeComponent } from './home/home.component';
import localeZH from "@angular/common/locales/zh";
import localefr from "@angular/common/locales/fr";
import localede from "@angular/common/locales/de";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    UserNameComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '269094727671-dat9luqp3ecpoqiv5054u01u6afgmg37.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeZH, "zh");
registerLocaleData(localefr, "fr");
registerLocaleData(localede, "de");

