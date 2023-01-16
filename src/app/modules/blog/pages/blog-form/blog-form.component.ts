import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {

  blogForm: FormGroup;

  constructor() {
    this.blogForm = new FormGroup({
      id: new FormControl(),
      title:new FormControl(),
      description:new FormControl(),
      author:new FormControl(),
      comments:new FormControl(),
    })
   }
}
