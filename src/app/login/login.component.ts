import { Component } from '@angular/core';
import { Login } from '../Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login:Login = new Login();


  Submit(){
    console.log("form",this.login)
  }

}
