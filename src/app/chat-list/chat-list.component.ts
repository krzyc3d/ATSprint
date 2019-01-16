import { Component, OnInit } from '@angular/core';
import { CHATLIST } from '../mock-chat-list';
import { Chat } from '../chat';
import { ChatService } from '../chat-service'


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  title="Chat list";
  chatList: Chat[];
  selectedChat: Chat;
  // localStorage: Storage;

  constructor(private chatService:ChatService) { }

  ngOnInit() {
    this.getChatList();
  }

  onSelect(chat:Chat): void{
    this.selectedChat=chat;
 }

  getChatList(): void{
    this.chatService.getChatList().subscribe(chatList=>this.chatList=chatList);
  }

  

}
