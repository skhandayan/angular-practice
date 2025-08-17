import { Component} from '@angular/core';
import { PostComponent } from './post/post';
import { PostListComponent } from './post-list/post-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PostComponent, PostListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class AppComponent {

}
