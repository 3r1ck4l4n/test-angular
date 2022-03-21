import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {LoginModel} from "../../models/login.model";
import {Global} from "../../env/url.env";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService,]
})
export class LoginComponent implements OnInit {



  public credentials: LoginModel;
  public url: string;
  public status: boolean;
  public errorMessage:string;
  public captchaToken: string|undefined;
  constructor(
    private _authService: AuthService,
      private router: Router
  ) {
  this.credentials = new LoginModel("", "");
  this.url = Global.url;
  this.status=true;
  this.errorMessage="";
  this.captchaToken=undefined;
}

  ngOnInit(): void {
  }

  submitCredentials(form:any){
      this._authService.login(this.credentials).subscribe(response=>{
        if(response.token){
          console.log(response.token)
          localStorage.setItem("token",response.token);
          localStorage.setItem("fullname",response.userData.fullName);
          console.log(response);
          this.router.navigate(['searchTuits']);
        }else {
          this.status = false;
        }


      },error => {
          console.log(error.error.message)
          this.status = false;
          this.errorMessage = error.error.message;
      })
  }



}
