import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  ngOnInit() {
    this.service.getPosts()
    .subscribe(
      Response => {
      this.posts = Response;
    });
  }
  posts;

 
  constructor(private service: PostService) { 
    
  }
 
  createPost(input:  HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
    .subscribe(
    response => {
      post['id'] = response;
      (this.posts as any[]).splice(0,0,post);
    }, 
    (error: AppError) => {
      if(error instanceof BadInput){
        //this.form.setErrors(error.originalError);
      }
      else throw error;
    });
  }
  updatePost(post) {
    this.service.updatePost(post)
    .subscribe(
    response => {
      console.log(response)
    });
  }

    deletePost(post) {
      this.service.deletePosts(post.id)
        .subscribe(
          response => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
          }, 
          (error: AppError) => {
            if (error instanceof NotFoundError)
              alert ("This post doesn't exist");
            else throw error;
      });
    }
}