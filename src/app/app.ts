import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppendCLIPipe, } from './Pipes/append-cli-pipe';
import { SummaryPipe } from './Pipes/summary-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, AppendCLIPipe, SummaryPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
    title: string = 'App Component';
    count: number = 1000000;
    dcValue: number = 3.85674;
    price: number = 99.99
    today: Date = new Date();

    postObject: object = {
      id: 1,
      postTitle: 'Post 1'
    }

    postArray: Array<string> = [
      'post 1',
      'post 2',
      'post 3',
      'post 4',
      'post 5',
    ]

    userDetails = {
      name: 'User 1',
      city: 'Newyork',
      countryCode: 'US' 
    }

    dummyText: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'


}
