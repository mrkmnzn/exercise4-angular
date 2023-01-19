import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../service/book.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, AfterViewInit {

  books: Book[] = []
  bookForm: FormGroup;
  bookId: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService) {


  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.bookId = id;
    this.books = this.bookService.getBooks()



    if(this.bookId){
      this.bookForm = new FormGroup({
        id: new FormControl(this.books.find(book => book.id == this.bookId).id),
        name: new FormControl(this.books.find(book => book.id == this.bookId).name),
        authors: new FormControl(this.books.find(book => book.id == this.bookId).authors),
        isbn: new FormControl(this.books.find(book => book.id == this.bookId).isbn),
      })

    }else{
      this.bookForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        authors: new FormControl(),
        isbn: new FormControl(),
      })
    }
    
  }

  ngAfterViewInit(): void {

  }

  save() {
    if(this.bookId){
      this.books.map((book, index) => {
        if(book.id === this.bookId){
          this.books[index] = {id: this.bookForm.get("id")?.value,
           name: this.bookForm.get("name")?.value,
          authors: this.bookForm.get("authors")?.value,
           isbn: this.bookForm.get("isbn")?.value
        }
      }
      })
      this.router.navigate(['book'])
    }else{
      this.books.push(this.bookForm.value)
      this.router.navigate(['book'])
    }
    
  }

}



