import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //baseurl = 'http://localhost/api/ngadminpanel-backend/';
  //baseurl = 'https://coderelisher.com/api/ngadminpanel-backend/';
  //baseurl = 'http://localhost:8080/';
  baseurl = 'https://coderelisher.com/nodejs-backend/';

  loginToken = new Subject<string>();

  constructor(private http: HttpClient, private matSnackbar: MatSnackBar) { }

  // Snackbar
  showSnackbar(msg: any){
    let horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    let verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    this.matSnackbar.open(msg, 'Done', {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      duration: 3000
    });
  }

  login(obj: any){
    let url = this.baseurl + 'login';
    //let token = localStorage.getItem('token')??'';
    /*const reqHeader = new HttpHeaders().set('Authorization', 'Bearer '+token);
    const options = {
      headers: reqHeader,
      body: obj,
    };*/ 
    let body = obj;
    console.log(obj)
    //return this.http.post(url, body, options);
    return this.http.post(url, body);
  }

  signup(obj: any){
    let url = this.baseurl + 'signup';
    //let token = localStorage.getItem('token')??'';
    /*const reqHeader = new HttpHeaders().set('Authorization', 'Bearer '+token);
    const options = {
      headers: reqHeader,
      body: obj,
    };*/ 
    let body = obj;
    //return this.http.post(url, body, options);
    return this.http.post(url, body);
  }

  getUsers(obj: any){
    let url = this.baseurl + 'users';
    let token = localStorage.getItem('token')??'';
    const reqHeader = new HttpHeaders().set('Authorization', 'Bearer '+token);
    const options = {
      headers: reqHeader,
      body: obj,
    }; 
    let body = obj;
    return this.http.get(url, options);
    //return this.http.post(url, body, options);
    //return this.http.post(url, body);
  }

  deleteUser(obj: any){
    let url = this.baseurl + 'user/'+obj.id;
    let token = localStorage.getItem('token')??'';
    const reqHeader = new HttpHeaders().set('Authorization', 'Bearer '+token);
    const options = {
      headers: reqHeader,
      body: obj,
    }; 
    return this.http.delete(url, options);
    //return this.http.post(url, body, options);
    //return this.http.post(url, body);
  }

}
