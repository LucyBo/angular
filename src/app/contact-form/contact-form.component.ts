import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
log(x) {console.log(x);}
submit(form){
  console.log(form);
}
contactMethods= [
  {id: 1, name: "Email"},
  {id: 2, name: "Phone"},
  {id: 3, name: "Letter"},
];
}
