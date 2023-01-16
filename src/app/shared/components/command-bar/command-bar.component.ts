import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/modules/blog/models/blog';
import { BlogService } from 'src/app/modules/blog/services/blog.service';
import { Book } from 'src/app/modules/book/models/book';
import { BookService } from 'src/app/modules/book/service/book.service';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit{


  @Output() newBooks = new EventEmitter<Book[]>();
  @Output() newBlogs = new EventEmitter<Blog[]>();

  books: Book[] = [];
  blogs: Blog[] = [];

  constructor(private bookService:BookService,
    private blogService:BlogService){}
    
  ngOnInit(){
    this.books = this.bookService.getBooks();
    this.blogs = this.blogService.getBlogs();
  }

  deleteAllBooks(){
    this.newBooks.emit(this.books.splice(0,this.books.length))
  }

  deleteAllBlogs(){
    this.newBlogs.emit(this.blogs.splice(0,this.blogs.length))
  }
}
