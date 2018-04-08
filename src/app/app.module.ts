import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {LoginComponent} from './views/user/login/login.component';
import {RstListComponent} from './views/rst/rst-list/rst-list.component';


import {AuthGuard} from './services/auth-guard.service';
import {SharedService} from './services/shared.service';
import {UserService} from './services/user.service.client';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    RstListComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
  ],
  providers: [
    {
      provide: 'UserService',
      useClass: UserService
    },
    {
      provide: 'SharedService',
      useClass: SharedService
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
