import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ChatInput } from './chat-input/chat-input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatInput],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App implements AfterViewInit {
  title: string = 'App Component'
  appParentMessage: string = 'Message from App Component to ChatInput Component'
  message?: string;
  fromChildOutput?: string;

  @ViewChild(ChatInput) childComponent!: ChatInput;

  constructor(public cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.message = this.childComponent.chatInputChildMessage
    this.cdr.detectChanges();
  }

  receiveMessage($event: string) {
    this.fromChildOutput = $event;
  }
}
