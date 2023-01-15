import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {

  title = new FormControl;
  description = new FormControl;
  author = new FormControl
  comments = new FormArray([
    new FormControl(null),
    new FormControl(null),
    new FormControl(null),
  ])
}
