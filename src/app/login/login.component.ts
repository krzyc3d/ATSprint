import { Component, OnInit } from '@angular/core';
import {UserComponent} from '../user/user.component'
import { UserCheckingService } from '../user-checking.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 

  loginForm: FormGroup;
  usersFormData: any;
  userModel= new User("","");
 

  constructor(private UserChecking: UserCheckingService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

 
  
  onSubmit(loginForm:NgForm):void{
      
      this.userModel.username= this.loginForm.value.username;
      this.userModel.password= this.loginForm.value.password;
      console.log(this.userModel.username);
      console.log(this.userModel.password);
  }

  getDataFromForm(){
    this.userModel.username= this.loginForm.value.username;
    this.userModel.password= this.loginForm.value.password;
    console.log(this.userModel.username);
    console.log(this.userModel.password);

    return (new User(this.userModel.username, this.userModel.password));
   
  }
   // this.usersFormData=this.loginUserFormService.getDataFromForm()
    // .subscribe(loginData => {debugger;});
    // return this.usersFormData;
  // loginUser(event){
  //   event.preventDefault()
  //   const target = event.target
  //   const username =target.querySelector('#username').value
  //   const password =target.querySelector('#password').value
     
  //   // this.UserChecking.getUserDetails(username, password)
  //   // console.log(event)
  // }

}
