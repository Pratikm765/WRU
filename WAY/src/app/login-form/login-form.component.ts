import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  uname:any;
  age:number;
  gender:string;

  constructor(private router: Router) { }

  
  login()
  {
    this.router.navigate(["/home"]);
  }
  closeForm()
  {
    this.uname="";
    this.age=18;
  }

  ngOnInit() {
  }

}
