import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  books: Book[] = [
    {
      id : 1,
      name: 'Book1',
      authors: ['author1', 'author2'],
      isbn: '123456789X',
    },
    {
      id : 2,
      name: 'Book2',
      authors: ['author3', 'author4'],
      isbn: '987654321X',
    },
    {
      id : 3,
      name: 'Book3',
      authors: ['author5', 'author6'],
      isbn: '678912345X',
    }
  ]


  getBooks(){
    return this.books;
  }

}
