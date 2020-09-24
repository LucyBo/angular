import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts;
  private postURL = 'http://jsonplaceholder.typicode.com/posts'; 
 
  constructor(private httpClient: HttpClient) { 
    httpClient.get(this.postURL)
    .subscribe(Response => {
      this.posts = Response;
    });
  }
 
  createPost(input:  HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.httpClient.post(this.postURL, JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response;
      (this.posts as any[]).splice(0,0,post);
    });
  }
  updatePost(post) {
    this.httpClient.patch(this.postURL + '/' + post.id, JSON.stringify({isRead: true}))
    .subscribe(response => {
    console.log(response)
    })
    }
}