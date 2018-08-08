import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { LoginComponent } from './login/login.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import {HttpModule} from '@angular/http'
import{HttpClientModule} from '@angular/common/http';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  
} from "angular-6-social-login";
import { ApiHitService } from './api-hit.service';

//************************************* *//
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("528690292192-q603hv8c7jgfbfi23goqb95ceo4404sn.apps.googleusercontent.com")
      }
      

    ]
  );
  return config;
}

//********************************** *//


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatroomComponent,
    LoginComponent,
    MessageBoxComponent,
    ChannelListComponent,
    ShowMessageComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ApiHitService,{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
