import { Component } from '@angular/core';

@Component({
  templateUrl: './post-create.component.html',
  selector: 'app-post-create',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredText='';
  newPost = 'No CONTENT';

  onAddPost() {
    this.newPost = this.enteredText;
  }
}
