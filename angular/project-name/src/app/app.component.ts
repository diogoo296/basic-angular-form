import { Component } from '@angular/core';
import { Friend } from './friend';
import {AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  languages:string[] = ["HTML","CSS","JAVASCRIPT","PHP"];

  title = 'Friend List';
  friend = new Friend("","","","","");

  getFriend(){
    this.addFriendService.addFriend(this.friend).subscribe(data => console.log("it worked"), error => console.log("it didn't work"));
    this.showFriends();
  }

  constructor(private addFriendService: AddFriendService){
  }

  ngOnInit(): void {
    this.showFriends();
  }

  allFriends:any
  async showFriends(): Promise<void> {
    let apiFriend = await fetch ("http://localhost:9000/allFriends", {headers: {
      'Content-Type': 'application/json'}});
      this.allFriends = await apiFriend.json();

    console.log(this.allFriends[1].firstName);
  }
}

