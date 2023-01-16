import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../service/book.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  book: Book [] = []
  bookForm: FormGroup;

  constructor(private router: Router,
    private bookService: BookService) {
    this.bookForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      authors: new FormControl(),
      isbn: new FormControl(),
    })
   }
  ngOnInit() {
    this.book = this.bookService.getBooks()
  }
  addBook(){
    console.log(this.bookForm.value)
    this.book.push(this.bookForm.value)
    this.router.navigate(['book'])
   }

}



