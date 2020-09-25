import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable()
export class DataService {
  constructor(private postURL: string, private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.postURL).pipe(
      catchError(this.handleError));
  }

  create(post){
    return this.httpClient.post(this.postURL, JSON.stringify(post)).pipe(
    catchError(this.handleError))
  }

  update(post) {
    return this.httpClient.patch(this.postURL + '/' + post.id, JSON.stringify({isRead: true})).pipe(catchError(this.handleError))
    ;
  }

  delete(id){
    return this.httpClient.delete(this.postURL + '/' + id).pipe
    (catchError(this.handleError));
  }


  private handleError(error: Response) {
    if(error.status === 400)
      return Observable.throw(new BadInput(error.json()))
    if(error.status === 404) 
        return Observable.throw(new NotFoundError());
    return Observable.throw(new AppError(error));
  }
}
