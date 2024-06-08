import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  
  form: any;
  constructor(private dataService: DataService, private router: Router){}
  
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  submit(){
    console.log(this.form.value);
    this.dataService.login(this.form.value).subscribe((data)=>{
      // Response Interface
      interface responseData{
        message: string,
        token: string,
        status: string,
      };

      let d = <responseData> data;

      // remove in production
      /*
      d = {
        "message": "Successfully logged in",
        "token": "abc",
        "status": "1"
      };*/

      if(d.status == "1"){
        localStorage.setItem("token", d.token);
        this.dataService.loginToken.next(d.token);
        this.dataService.showSnackbar(d.message);
        this.router.navigate(['/'])
      }else{
        this.dataService.showSnackbar("Something went wrong");
      }
    });
    //this.router.navigate(['/'])
  }
}
