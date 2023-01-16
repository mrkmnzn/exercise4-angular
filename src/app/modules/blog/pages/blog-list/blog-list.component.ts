import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent  implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogService:BlogService){}

  ngOnInit(){
    this.blogs = this.blogService.getBlogs();
  }

  deleteAllBlogs($event: any){
    this.blogs = $event
  }
}
