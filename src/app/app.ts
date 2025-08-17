import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {

}
