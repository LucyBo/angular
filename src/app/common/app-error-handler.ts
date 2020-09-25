import {ErrorHandler} from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
  handleError(error){
    alert("An unexpcted error occured");
    console.log(error);
  }
}