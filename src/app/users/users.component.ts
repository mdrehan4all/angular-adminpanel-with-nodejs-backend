import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  data: any;
  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.dataService.getUsers({}).subscribe((data: any)=>{
      console.log(data);
      this.data = data;
    })
  }
  deleteUser(id: any){
    console.log(id)
    this.dataService.deleteUser({id: id}).subscribe((data: any)=>{
      console.log(data);
      this.getUsers();
    })
  }
}
