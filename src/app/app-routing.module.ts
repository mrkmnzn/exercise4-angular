import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './modules/book/pages/book-form/book-form.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'

  },
  {
    path: 'book',
    loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'form/:id',
    component: BookFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
