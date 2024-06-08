import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{

  form: any;

  constructor(private dataService: DataService, private router: Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  submit(){
    console.log(this.form.value);
    this.dataService.signup(this.form.value).subscribe((data)=>{
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
        "message": "Successfully created acccount",
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
    //console.log(this.form.value);
  }
}
