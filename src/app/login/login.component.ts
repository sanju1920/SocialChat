import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, AuthService } from '../../../node_modules/angular-6-social-login';
import { ApiHitService } from '../api-hit.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private service: ApiHitService, private routes: Router) {


  }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData
        // ...
        // set the user data to MyService so your can use it of its own 

        var res = this.service.getChannel();
        res.subscribe(data => {
          console.log(data.channels, "from Get");
      
        });
        this.routes.navigate(['/ChatRoom'])

      }
    );

  }
}
