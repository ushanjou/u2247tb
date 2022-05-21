import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { UserNameComponent } from './auth/user-name/user-name.component';
import { FormsModule } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent, 
    AdminPageComponent,
    HomeComponent,
    UserNameComponent
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
              '59192101206-uq4p6k672nb2f230j9t67je0mci3tpko.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
