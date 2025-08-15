import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChatMessage } from '../chat-message/chat-message';

@Component({
  selector: 'app-chat-input',
  imports: [ChatMessage],
  templateUrl: './chat-input.html',
  styleUrl: './chat-input.css',
})
export class ChatInput {
  title: string = 'ChatInput Component';
  chatInputParentMessage: string = 'Message from ChatInput Component to ChatMessage Component';

  chatInputChildMessage: string = 'Message From ChatInput Component to App Component';

  outputChildMessage: string = 'Message from ChatInput to App Component Via Output';



  @Input() fromApp!: string;

  @Output() messageEvent = new EventEmitter<string>();
  
  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }

}
