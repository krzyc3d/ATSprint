import { Injectable } from '@angular/core';
import { Chat } from './chat';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageChatService {
  private chats: Chat[];
  private nextId: number;

  constructor() { 
    let chats =this.getChats();
      if(chats.length==0){
        this.nextId= 0;
      }
      else{
        let maxId = chats[chats.length-1].id;
        this.nextId = maxId+1;
      }
      // this.chats =[
      //   new Chat(0, "Test Chat"),
      //   new Chat(1, "New Chat")
      // ];
      // this.nextId=2;
  }

  public addChat(text:string):void{
    // console.log(this.chats);
    // this.chats.push(chat);
    
    let chat = new Chat(this.nextId, text);
    let chats=this.getChats();
    chats.push(chat);
    
    this.setLocalStorageChats(chats);
    this.nextId++;

  }

  // public getChats(): Chat[]{
  //   return this.chats;
  // }
  public getChats():Chat[]{
    let localStorageItem= JSON.parse(localStorage.getItem('chats'));
    return localStorageItem== null? [] : localStorageItem.chats;
  }

  public removeChat(id: number):void{
    let chats=this.getChats();
    chats = chats.filter((chat)=> chat.id !=id);
    this.setLocalStorageChats(chats);
  }

  public editChat(id: number, name: string):void{
    let chats =this.getChats();
    chats =chats.filter((chat)=> chat.id =id);
    chats =chats.filter((chat)=> chat.name =name);
    this.addChat(name);
    this.setLocalStorageChats(chats)
  }

  public setLocalStorageChats(chats: Chat[]):void{
    localStorage.setItem('chats', JSON.stringify({chats: chats}));
  }
}
