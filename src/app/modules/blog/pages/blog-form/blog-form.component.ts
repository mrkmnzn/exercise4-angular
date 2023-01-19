import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit{

  blogs: Blog[] = []
  blogForm: FormGroup;
  blogId: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private blogService:BlogService) {
    
   }


  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
    let id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.blogId = id;

    if(this.blogId){
      this.blogForm = new FormGroup({
          id: new FormControl(this.blogs.find(blog => blog.id == this.blogId).id),
          title:new FormControl(this.blogs.find(blog => blog.id == this.blogId).title),
          description:new FormControl(this.blogs.find(blog => blog.id == this.blogId).description),
          author:new FormControl(this.blogs.find(blog => blog.id == this.blogId).author),
          comments:new FormControl(this.blogs.find(blog => blog.id == this.blogId).author),
      })
    }else{
      this.blogForm = new FormGroup({
        id: new FormControl(),
        title: new FormControl(),
        description: new FormControl(),
        author: new FormControl(),
        comments: new FormControl(),
      })
    }

  }


  save(){
    if(this.blogId){
      this.blogs.map((blog, index) =>{
        if(blog.id === this.blogId){
          this.blogs[index] = {id: this.blogForm.get("id")?.value,
            title: this.blogForm.get("title")?.value,
            description: this.blogForm.get("description")?.value,
            author: this.blogForm.get("author")?.value,
            comments: this.blogForm.get("comments")?.value,

          }
        }
      })
      this.router.navigate(['blog'])
    }else{
      this.blogs.push(this.blogForm.value)

    }
  }
}
