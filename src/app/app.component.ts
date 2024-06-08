import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  title = 'Admin Panel';
  logged: boolean = false;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    /*
    this.router.events.subscribe((data: any)=>{
      if(data.constructor.name == 'NavigationStart'){
        if(data.url == '/login' || data.url == '/signup'){
          this.logged = false;
        }else{
          this.logged = true;
        }
      }
    });*/
    this.loginCheck();
    this.dataService.loginToken.subscribe((data)=>{
      this.loginCheck();
      console.log('Token changed', this.logged);
    });
  }
  loginCheck(){
    let token = localStorage.getItem("token")??'';
    console.log(token)
    if(token == ''){
      this.logged = false;
    }else{
      this.logged = true;
    }
  }
}
