import { Injectable } from '@angular/core';
import { Chat } from './chat'
import { CHATLIST } from './mock-chat-list'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ChatService{
  
  constructor() { }


  getChatList(): Observable<Chat[]>{
    return of(CHATLIST);
  }

  getChat(id:number):Observable<Chat>{

  return of(CHATLIST.find(chat => chat.id === id));
  }

}