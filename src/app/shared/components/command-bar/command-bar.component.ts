import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/modules/blog/models/blog';
import { Book } from 'src/app/modules/book/models/book';
import { BookListComponent } from 'src/app/modules/book/pages/book-list/book-list.component';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit{

  @Output () Books = new EventEmitter<{action: string, source: string}>()
  @Output () Blogs = new EventEmitter<{action: string, source: string}>()
  activeRoute: string
  source: any

  constructor(private router: Router,
    private route: ActivatedRoute){}
  
    ngOnInit(): void {

      this.activeRoute = this.route.snapshot.component.name
      console.log(this.activeRoute)


    }

    delete(){
      if(this.activeRoute ==="BookListComponent"){
        this.Books.emit({action: 'delete', source: 'book'})
      }else{
        this.Blogs.emit({action: 'delete', source:'blog'})
      }
    }

    add(){
      if(this.activeRoute ==="BookListComponent"){
        this.router.navigate(['book/form'])
      }else{
        this.router.navigate(['blog/form'])
      }
    }
}
