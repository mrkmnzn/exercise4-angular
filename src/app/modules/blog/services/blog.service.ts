import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  blogs: Blog [] = [
    {
      id: 1,
      title: 'Blog1', 
      description: 'FirstBlog', 
      author: 'author1', 
      comments: ['firstComment','secondComment']
    },
    {
      id: 2,
      title: 'Blog2', 
      description: 'SecondBlog', 
      author: 'author2', 
      comments: ['firstComment','secondComment']
    },
    {
      id: 1,
      title: 'Blog3', 
      description: 'ThirdBlog', 
      author: 'author3', 
      comments: ['firstComment','secondComment']
    }
  ]

  getBlogs(){
    return this.blogs;
  }
}
