import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
    
  name: string = '';
  email: string = '';
  address: string = '';

  userDetailsArray: Array<any> = [];

  saveNewData() {
    this.userDetailsArray.push({
      name: this.name,
      email: this.email,
      address: this.address
    });
    console.log(this.userDetailsArray)
  }

  removeItem(index: number) {
    this.userDetailsArray.splice(index, 1)
  }
}
