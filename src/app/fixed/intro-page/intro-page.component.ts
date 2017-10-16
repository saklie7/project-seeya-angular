import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { IntroPageService } from './intro-page.service';
import { Member } from '../../model/member.model';
import { LoginModel } from '../../model/login.model';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {

  joinMember:Member;
  loginMember:LoginModel;
  errorMessage:string;
  constructor(public http:Http, private introService:IntroPageService, private appcomp:AppComponent, private router:Router) { }

  ngOnInit() {
    document.querySelector('.img__btn').addEventListener('click', function() {
      document.querySelector('.cont').classList.toggle('s--signup');
    });
  }

  loginFormSubmit(loginForm) {
    if(loginForm.valid) {

      let loginMember = loginForm.value;
      console.log("login id : "+loginMember.memberid);
      this.introService.loginMemberToSpring(loginMember).subscribe(member=> this.joinMember = member, error=>this.errorMessage=error);
      console.log("checked called");
      this.appcomp.checkedSession();
    }
  }

  joinFormSubmit(joinForm) {
    if(joinForm.valid) {

      let joinMember = joinForm.value;
      console.log("joinForm value : " + joinMember.email);
      this.introService.joinMemberToSpring(joinMember).subscribe(member=> this.joinMember = member, error=>this.errorMessage=error);
      // console.log(JSON.parse(sessionStorage.getItem("member"))["memberid"]);
      this.appcomp.checkedSession();
    }
  }

}
