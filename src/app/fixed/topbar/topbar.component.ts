import { Component, OnInit, Output } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { Member} from '../../model/member.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  isActive: number;
  loginMember:Member;
  constructor(private router:Router) { }

  ngOnInit() {
    this.getSessionMember();
  }

  getSessionMember() {
    if(sessionStorage.getItem("member")) {
      this.loginMember = JSON.parse(sessionStorage.getItem("member"));
    }
  }

  logout() {
    sessionStorage.removeItem("member");
    console.log("logout() called");
    this.router.navigate(['/']);
  }
}
