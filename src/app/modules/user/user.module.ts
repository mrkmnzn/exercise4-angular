import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form.component';
import { ProfileRoutingModule } from './profile-routing.module';
@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class UserModule { }
