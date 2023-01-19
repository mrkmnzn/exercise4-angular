import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit{

  blogs:Blog[] = [];

  constructor(private blogService:BlogService,
    private router: Router){}

    ngOnInit(){
      this.blogs = this.blogService.getBlogs()
    }

    editOrDelete(event: {blog: Blog, action: string}){
      switch(event.action){
        case 'delete':
        this.blogs.forEach((element, index) =>{
            if(element.id == event.blog.id) this.blogs.splice(index,1)
        });
        break;

        case 'edit':
          this.router.navigate(['form/',event.blog.id])
          break;
      }
    }

    addOrDelete(event: {blog:Blog, action: string}){
      switch(event.action){
        case 'deleteAll':
          this.blogs.splice(0);
      }
    }

}


