import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Friend } from './friend';


@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  constructor(private http: HttpClient) { }

  url= "http://localhost:9000/addFriend";

  addFriend(friend:Friend){
    console.log(friend);
    return this.http.post(this.url, friend);
  }
}

