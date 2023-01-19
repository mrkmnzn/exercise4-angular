import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/modules/blog/models/blog';
import { BlogService } from 'src/app/modules/blog/services/blog.service';
import { Book } from 'src/app/modules/book/models/book';
import { BookService } from 'src/app/modules/book/service/book.service';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent{

  @Input () book: any | undefined;
  @Output () Books = new EventEmitter<{book: Book, action: string}>()
  @Input () blog: any | undefined;
  @Output () Blogs = new EventEmitter<{blog: Blog, action: string}>()

  constructor(private router: Router){}

  bookAction(book: Book, action: string){
    this.Books.emit({book, action})
  }

  blogAction(blog: Blog, action: string){
    this.Blogs.emit({blog, action})
  }

  addBook(){
    this.router.navigate(['book/form'])
  }

  addBlog(){
    this.router.navigate(['blog/form'])
  }
}
