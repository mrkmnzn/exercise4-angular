import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit{

  books: Book[] = [];

  constructor(private bookService:BookService){}

  ngOnInit(){
    this.books = this.bookService.getBooks()
  }

  name = new FormControl;
  authors = new FormArray([
  new FormControl(null)
  ]);
  isbn = new FormControl;


add(){
  this.authors.push(new FormControl())
}

edit(index: number){

}


}



