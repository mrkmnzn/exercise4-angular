import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  constructor() {
    this.bookForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      authors: new FormControl(),
      isbn: new FormControl(),
    })
   }
  ngOnInit() {
    
  }



  
  addBook() {
      // this.peopleArray.push(this.createBookGroup());
    }

  onSubmit() {
      console.log(this.bookForm?.value);
    }

  removeBook(index: number) {
      this.peopleArray.removeAt(index);
    }

  get peopleArray() {
      return(<FormArray> this.bookForm?.get('people'));
  }

}



