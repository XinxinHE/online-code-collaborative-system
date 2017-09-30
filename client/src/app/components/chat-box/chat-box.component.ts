import { Component, OnInit } from '@angular/core';
import { CollaborationService } from '../../services/collaboration.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  message: string;
  messageHistory: any = [];
  constructor(private collaboration: CollaborationService) { }

  ngOnInit() {
    this.collaboration.initChatbox().subscribe((newMessage) => {
      newMessage = JSON.parse(newMessage);
      this.messageHistory.push(newMessage);
      var container = document.getElementById('historyMsg');
      container.scrollTop = container.scrollHeight;
    });
  }
  sendMessage() {
    if (this.message) {
      console.log('Chat-box message: ' + this.message);
      this.collaboration.sendMessage(this.message);
      this.message = '';
    }
  }
}
