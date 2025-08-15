import { Component} from '@angular/core';
import { ChatInput } from './chat-input/chat-input';
import { ChatMessage } from './chat-message/chat-message';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatInput, ChatMessage, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  title: string = 'App Component'
  message: string = 'Message From Typescript Component file';
  imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xaZ5a5hWazi3ZJ7EP2S84Xz2jfXDjQ6Zqw&s';
  bool: boolean = true;

  buttonMessage: string = 'Button Click Event worked';
  userName?: string;

  buttonClick() {
    console.log('Clicked')
  }

  onKeyup() {
      console.log('Event keyup works')
  }

  getInput1(username: any) {
      console.log(username)
  }

  getInput2() {
    console.log(this.userName)
  }
}
