import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  logged: boolean = false;

  constructor(private dataService: DataService, private router: Router){}

  ngOnInit(): void {
    this.loginCheck();
    this.dataService.loginToken.subscribe((data)=>{
      this.loginCheck();
    });
  }

  loginCheck(){
    let token = localStorage.getItem("token")??'';
    if(token == ''){
      this.logged = false;
    }else{
      this.logged = true;
    }
  }

  logout(){
    localStorage.clear();
    this.dataService.loginToken.next('');
    this.loginCheck();
    this.router.navigate(['login']);
  }
}
