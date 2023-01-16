import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input() books: any | undefined;

  constructor(private router: Router){

  }

  edit(){
    this.router.navigate(['book/form/'])

    console.log(this.books.id)
  }

}
