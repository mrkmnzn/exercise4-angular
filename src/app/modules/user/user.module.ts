import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormComponent } from './components/form/form.component';
import { ProfilerComponent } from './components/profiler/profiler.component';



@NgModule({
  declarations: [
    FormComponent,
    ProfilerComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class UserModule { }
