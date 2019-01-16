import { Component, OnInit, Input} from '@angular/core';
import { Chat } from '../chat'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChatService} from '../chat-service'
import { from } from 'rxjs';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit {
  @Input() chat: Chat;
  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private location: Location,
  ) { }

  ngOnInit() :void{
    this.getChat();
  }

  getChat():void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.chatService.getChat(id).subscribe(chat => this.chat= chat);
  }

  goBack():void{
    this.location.back();
  }
}
