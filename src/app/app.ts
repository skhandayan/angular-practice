import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {

  postTitle?: string;
  postDetails?: string;
  postImageUrl?: string;
  postUrl?: string;
  isChecked?: boolean;

  getTitle($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.postTitle = input.value
  }

  getDetails($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.postDetails = input.value
  }

  getImageUrl($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.postImageUrl = input.value
  }

  getUrl($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.postUrl = input.value
  }

  toggleCheckBox($event: Event) {
    const isChecked = $event.target as HTMLInputElement;
    this.isChecked = isChecked.checked
  }

}
