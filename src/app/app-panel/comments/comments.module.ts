import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { AllCommentsComponentComponent } from './all-comments-component/all-comments-component.component';
import { CommentControlComponentComponent } from './comment-control-component/comment-control-component.component';


@NgModule({
  declarations: [CommentsComponent, AllCommentsComponentComponent, CommentControlComponentComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }
