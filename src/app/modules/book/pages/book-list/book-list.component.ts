import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  books:Book[] = [];

  constructor(private bookService:BookService){

  }

  ngOnInit(){
    this.books = this.bookService.getBooks()
  }

}
