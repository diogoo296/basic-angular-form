import { Component } from '@angular/core';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Friend List';
  friend = new Friend("","","","","");

  getFriend(){
    console.log(this.friend);
  }
}

