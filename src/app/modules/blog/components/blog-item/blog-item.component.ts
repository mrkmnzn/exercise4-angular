import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {

  @Input() blog: any | undefined;

  @Output () actionEmmiter = new EventEmitter<{blog:Blog, action: string}>();

  executeAction(blog:Blog, action: string){
    this.actionEmmiter.emit({blog, action})
  }

  

}
