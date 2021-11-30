import { Component } from '@angular/core';
import { Friend } from './friend';
import {AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Friend List';
  friend = new Friend("","","","","");

  getFriend(){
    this.addFriendService.addFriend(this.friend).subscribe(data => "it worked", error => "it didn't work");
  }

  constructor(private addFriendService: AddFriendService){
  }
}

