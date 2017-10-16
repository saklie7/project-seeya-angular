import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Member } from '../../model/member.model';
import { LoginModel } from '../../model/login.model';


@Injectable()
export class IntroPageService {


  private memberHttpUrl:string = "http://localhost:8080/seeya/";
  private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(public http:Http) { }

  joinMemberToSpring(member:Member): Observable<Member> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // let joinMember = { "memberid":member.memberid, "password":member.password, "email":member.email, "nickname":member.nickname};
    console.log("joinMember : "+JSON.stringify(member));
    return this.http.post(this.memberHttpUrl+"join", member, options).map(this.extractDataForObject).catch(this.handleError);
  }

  loginMemberToSpring(login:LoginModel): Observable<Member> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // let joinMember = { "memberid":member.memberid, "password":member.password, "email":member.email, "nickname":member.nickname};
    console.log("loginMember : "+JSON.stringify(login));
    return this.http.post(this.memberHttpUrl+"login", login, options).map(this.extractDataForObject).catch(this.handleError);
  }
  
  private extractDataForObject(res: Response) {
    console.log('res = ' + JSON.stringify(res));
    // header 정보를 제외한 데이터만 뽑아오는 함수 --> text()
    let json = res.text();
    console.log("res : "+json);
    json = JSON.parse(json);
    if(json["error"]) {
      return false;
    }
    sessionStorage.setItem("member", JSON.stringify(json));
    return json || {};
  }

  private handleError(res: Response) {
    console.log(res);
    return Observable.throw(res.json().error || 'Server Down');
  }
}
