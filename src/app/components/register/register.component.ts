import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserModel} from "../../models/user.model";
import {Global} from "../../env/url.env";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  public user: UserModel;
  public status: boolean | undefined;
  public confirmPassword: string | undefined;
  public url: string;
  constructor(
    private _authService: AuthService,
    private router:Router
  ) {
    this.user = new UserModel("", 0, "", "", "");
    this.confirmPassword="";
    this.url = Global.url;
    this.status=true;
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(form);
    this._authService.addUser(this.user).subscribe(response => {
      console.log(response);
      if (response.created)this.router.navigate(['login']);
    }, error => {
      this.status =false;
      console.log(status);
    })
  }

  confirmAssign(passConf: any){
    this.confirmPassword = passConf.target.value;
  }

  passwordConfirmation():boolean{
    // @ts-ignore
    return  this.confirmPassword.toString() === this.user.password.toString();
  }

  changeStatus(){
    this.status=true;
  }
}
