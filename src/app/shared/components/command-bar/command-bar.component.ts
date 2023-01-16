import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/modules/book/models/book';
import { BookService } from 'src/app/modules/book/service/book.service';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit{

  books: Book[] = [];

  constructor(private bookService:BookService){}
  ngOnInit(){
    this.books = this.bookService.getBooks();
  }

  deleteAll(){
      this.books.splice(0,this.books.length)
  }
}
