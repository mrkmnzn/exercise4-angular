import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent{

  @Input() book: any | undefined;

  @Output() actionEmmiter = new EventEmitter<{book:Book, action: string}>()


  constructor(){
  }

  executeAction(book:Book, action: string){
    this.actionEmmiter.emit({book, action})
  }
}
