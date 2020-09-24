import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts = [];
 
  constructor(http: HttpClient) {
    http.get('http://jsonplaceholder.typicode.com/posts').subscribe((resolve => {
      for (let key in resolve) {
        if (resolve.hasOwnProperty(key))
          this.posts.push(resolve[key]);
      }
    }));
  }
}