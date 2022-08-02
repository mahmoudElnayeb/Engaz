import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostControlComponentComponent } from './post-control-component/post-control-component.component';
import { AllPostsComponentComponent } from './all-posts-component/all-posts-component.component';


@NgModule({
  declarations: [PostsComponent, PostControlComponentComponent, AllPostsComponentComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
