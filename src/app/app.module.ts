import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { LoginComponent } from './login/login.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http'
import{HttpClientModule} from '@angular/common/http';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  
} from "angular-6-social-login";
import { ApiHitService } from './api-hit.service';
import { MyserviceService } from './myservice.service';
import { AuthguardService } from './authguard.service';

//************************************* *//
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("528690292192-q603hv8c7jgfbfi23goqb95ceo4404sn.apps.googleusercontent.com")
      },
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("463612824113758")
      }
      

    ]
  );
  return config;
}

//***************   Create routes       ******************* *//
const routes =[
  { path: '',  redirectTo: '/login', pathMatch: 'full' },
  {path:'login' , component:LoginComponent},
  {path:'ChatRoom',component:ChatroomComponent,canActivate:[AuthguardService]
},
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

// **********************************//
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
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ApiHitService,MyserviceService,AuthguardService,{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
