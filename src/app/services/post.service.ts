import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postURL = 'http://jsonplaceholder.typicode.com/posts'; 

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.postURL);
  }

  createPost(post){
    return this.httpClient.post(this.postURL, JSON.stringify(post))
  }

  updatePost(post) {
    return this.httpClient.patch(this.postURL + '/' + post.id, JSON.stringify({isRead: true}))
  }

  deletePosts(post){
    return this.httpClient.delete(this.postURL + '/' + post.id)
  }
}
