import { Component,OnInit } from '@angular/core';
import { LoginModel } from './model/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogin:boolean = false;

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.checkedSession();
  }

  checkedSession() {
    if(sessionStorage.getItem("member")) {
      console.log("1 : " + sessionStorage.getItem("member"));
      this.isLogin = true;
      if(this.isLogin) {
        console.log("fuck");
        this.router.navigate(['/main-home']);
      }
    } else {
      this.isLogin = false;
    }
  }
}
