import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './iuser';
import { map } from 'rxjs-compat/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserCheckingService {
  usersJSON:any;

  constructor(private http: HttpClient) { }

  getUsersDetails():Observable<User>{
    // this.usersJSON=
    return this.http.get<User>('assets/config.json');
    // return this.usersJSON;
  }
}
