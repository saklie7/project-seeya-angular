import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../../model/member.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isActive: number;
  loginMember:Member;
  constructor(private router:Router) { }

  ngOnInit() {
    this.getSessionMember();
  }

  // sbActive(newValue: number) {
  //   if (this.isActive === newValue) {
  //     this.isActive = 0;
  //   }
  //   else {
  //     this.isActive = newValue;
  //   }
  // }

  getSessionMember() {
    if(sessionStorage.getItem("member")) {
      this.loginMember = JSON.parse(sessionStorage.getItem("member"));
    }
  }

  logout() {
    sessionStorage.removeItem("member");
    console.log("logout() called");
    this.router.navigate(['/main-home']);
  }


}
