import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canSave = true;
  post = {
    title: "Title",
    isFavorite: true
  }
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed", eventArgs);
  }
  viewMode = "map"; 
  tweet = {
    body: "...",
    likesCount: 10,
    isLiked: true
  }
 
 onAdd() {
   this.courses.push({id: 4, name:"course4"});
 }
 onRemove(course) {
  let index = this.courses.indexOf(course);
  this.courses.splice(index, 1);
 }
 courses;
 loadCourses() {
   this.courses =[
    {id:1, name: "course1"},
    {id:2, name: "course2"},
    {id:3, name: "course3"}];

 }

 trackCourse(index, course){
    return course ? course.id : undefined;

 }

 task = {
   title: "Review Applications",
   assignee: {
     name: "John Smith"
   }
 }

}
