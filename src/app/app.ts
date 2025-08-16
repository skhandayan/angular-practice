import { Component} from '@angular/core';
import {JsonPipe, NgStyle, NgClass} from "@angular/common"


interface Post {
  id: number;
  postTitle: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, NgStyle, NgClass],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  

  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5']
  
  objectArray: Array<Post> = [
    {
      id: 1, 
      postTitle: 'POST 1'
    }, {
      id: 2, 
      postTitle: 'POST 2'
    }, {
      id: 3, 
      postTitle: 'POST 3'
    }, {
      id: 4, 
      postTitle: 'POST 4'
    }, {
      id: 5, 
      postTitle: 'POST 5'
    }
  ]

  stepForm?: string;

  isActive: boolean = true;

  addNew() {
    this.objectArray.push({id: 6, postTitle: 'POST 6'});
  }

  removeItem(index: number) {
    this.objectArray.splice(index, 1)
  }

  onClick(status: string) {
    this.stepForm = status
  }
}
