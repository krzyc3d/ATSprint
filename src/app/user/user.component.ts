import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
// import { User } from '../iuser'
// import { User } from '../user'
import { UserCheckingService } from '../user-checking.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
   users: User;
   usersData: any;
   userJSONModel: User[];

  constructor(private userService: UserCheckingService){
    
  }

  ngOnInit()  {
    this.usersData=this.userService.getUsersDetails()
    .subscribe((usersData:User)=>{ this.users = usersData; } 
    );
  }
    getUserJSON(){
      console.log(this.users);
    return this.users;
    }
  

  
 


  
}
