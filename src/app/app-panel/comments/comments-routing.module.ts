import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCommentsComponentComponent } from './all-comments-component/all-comments-component.component';
import { CommentControlComponentComponent } from './comment-control-component/comment-control-component.component';

import { CommentsComponent } from './comments.component';

const routes: Routes = [
  { path: '', component: CommentsComponent, children:[
    {path:'all' , component:AllCommentsComponentComponent},
    {path:'control' , component:CommentControlComponentComponent},

  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
