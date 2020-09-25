import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators/catchError';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

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

  deletePosts(id){
    return this.httpClient.delete(this.postURL + '/' + id)
    .catchError((error: HttpErrorResponse) => {
      if(error.status === 404) 
        return Observable.throw(new NotFoundError());
      return Observable.throw(new AppError(error));
    })
  }
}
