import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin:boolean|undefined;
  constructor(private route:Router){
  }

  ngOnInit(): void {
this.ChangeHeader();
  }

  ChangeHeader(){
    if(!this.isLogin)
      {
        this.isLogin=true;
        this.route.navigate(['/login'])
        console.log(this.isLogin)
        return;
      }
      else{
        this.isLogin = false;
        this.route.navigate(['/registration'])
        console.log(this.isLogin)
        return;
      }
  }

  


}
