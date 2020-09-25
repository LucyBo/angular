import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  ngOnInit() {
    this.service.getPosts()
    .subscribe(Response => {
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
    .subscribe(response => {
      post['id'] = response;
      (this.posts as any[]).splice(0,0,post);
    });
  }
  updatePost(post) {
    this.service.updatePost(post)
    .subscribe(response => {
    console.log(response)
    })
    }

    deletePost(post) {
      this.service.deletePosts(post).subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
    }
}