import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit{

  blogForm: FormGroup;

  blogs: Blog[] = [];

  constructor(private router: Router,
    private blogService:BlogService) {
    this.blogForm = new FormGroup({
      id: new FormControl(),
      title:new FormControl(),
      description:new FormControl(),
      author:new FormControl(),
      comments:new FormControl(),
    })
   }
  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }
  
   addComment(){
    console.log(this.blogForm.value)
    this.blogs.push(this.blogForm.value)
    this.router.navigate(['blog'])
   }
}
