import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';

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
    }, 
    error => {
      alert("An unexpcted error occured");
      console.log(error);
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
    (error: Response) => {
      if(error.status === 400){
        // this.form.setErrors(error.json());
      }
      else {
        alert("An unexpcted error occured");
        console.log(error);
        }
     
    });
  }
  updatePost(post) {
    this.service.updatePost(post)
    .subscribe(
    response => {
      console.log(response)
    }, 
    error => {
      alert("An unexpcted error occured");
      console.log(error);
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
            else {
              alert("An unexpcted error occured");
              console.log(error);
            }
      });
    }
}