import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {UserComponent} from '../user/user.component'
import { User } from '../user';

@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.scss']
})
export class ControlPageComponent implements OnInit {
  loginComponent: LoginComponent;
  userComponent: UserComponent;
  userJSON = new User("","");
  formUsers= new User("","");


  constructor() { }

  ngOnInit() {
    this.formUsers=this.loginComponent.getDataFromForm();
    this.userJSON=this.userComponent.getUserJSON();
    
  }
  isCanLogIn(){
  // if((this.userJSON.username== this.formUsers.username)&&(this.userJSON.password == this.formUsers.password)){
    // this.formUsers=this.loginComponent.getDataFromForm();
    // this.userJSON=this.userComponent.getUserJSON();  
    console.log(this.userJSON.password);
    console.log(this.userJSON);
    console.log(this.formUsers);
  //   return true;
  }
  

}
