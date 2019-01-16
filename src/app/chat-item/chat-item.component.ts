import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageChatService } from '../local-storage-chat.service'
import { Chat } from '../chat';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  @Input()
  private chat:Chat;

  constructor(private localStorageService: LocalStorageChatService) { }

  ngOnInit() {
  }

  private removeChat(): void{
    this.localStorageService.removeChat(this.chat.id);
  }

  private editChat(): void {
    this.localStorageService.editChat(this.chat.id,this.chat.name);
  }

}
