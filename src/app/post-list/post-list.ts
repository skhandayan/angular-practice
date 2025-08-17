import { Component } from '@angular/core';
import { PostService } from '../services/post';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostListComponent {

  postList: Array<any>;

  constructor( private postService: PostService ) {
    this.postList = postService.postList
  }

}
