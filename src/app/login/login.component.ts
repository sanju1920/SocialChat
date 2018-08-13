import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, AuthService, FacebookLoginProvider } from '../../../node_modules/angular-6-social-login';
import { ApiHitService } from '../api-hit.service';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { AuthguardService } from '../authguard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private service: ApiHitService, private routes: Router, private myserve: MyserviceService, private auth: AuthguardService) {
      service.UserData = JSON.parse(sessionStorage.getItem('Userdata')) ; 
      if( JSON.parse(sessionStorage.getItem('Userdata'))!=undefined)
      {
        routes.navigate(['/ChatRoom'])
        alert('Already Loged In')
      }     

  }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        sessionStorage.setItem('Userdata',JSON.stringify(userData))
      //  console.log(socialPlatform + " sign in data : ", userData);
        this.service.UserData = userData;
        this.auth.auth = true;
        // Now sign-in with userData
        // ...
        // set the user data to MyService so your can use it of its own 

        var res = this.service.getChannel();
        res.subscribe(data => {
          //  console.log(data.channels, "from Get");
          this.myserve.AllchannelDetail = data.channels;
          //  console.log(this.myserve.AllchannelDetail)
          this.routes.navigate(['/ChatRoom'])
        });


      }
    );

  }
}
