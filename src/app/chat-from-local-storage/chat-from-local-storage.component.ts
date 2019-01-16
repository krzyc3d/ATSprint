import { Component, OnInit } from '@angular/core';
import { LocalStorageChatService } from '../local-storage-chat.service'

@Component({
  selector: 'app-chat-from-local-storage',
  templateUrl: './chat-from-local-storage.component.html',
  styleUrls: ['./chat-from-local-storage.component.scss']
})
export class ChatFromLocalStorageComponent implements OnInit {

  private chatName: string;

  constructor(private localStorageChatService: LocalStorageChatService ) {
    this.chatName='';
   }

   ngOnInit() {
     
  }
  private addChat():void{
    
    this.localStorageChatService.addChat(this.chatName);
    this.chatName='';
  }
  
}
