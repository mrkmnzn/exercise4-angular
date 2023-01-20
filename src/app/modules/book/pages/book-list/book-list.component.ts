import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  books:Book[] = [];

  constructor(private bookService:BookService,
    private router: Router){

  }

  ngOnInit(){
    this.books = this.bookService.getBooks()
  }

  editOrDelete(event: {book: Book, action: string}){
    switch(event.action){
      case 'delete': 
        this.books.forEach((element, index) => {
          if(element.id == event.book.id) this.books.splice(index,1)
        });
        break;
      case 'edit':
        this.router.navigate(['form/',event.book.id])
        break;
    }
  }

  addOrDelete(event: {action: string, source: string}){
    switch(event.action){
      case 'delete':
        if(event.source === 'book'){
          this.books.splice(0);
        }
    }
  }

}
