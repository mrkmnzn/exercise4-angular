import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { RouterModule } from '@angular/router';
import { BookService } from '../modules/book/service/book.service';



@NgModule({
  declarations: [
    HeaderComponent,
    CommandBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent, CommandBarComponent]
})
export class SharedModule { }
