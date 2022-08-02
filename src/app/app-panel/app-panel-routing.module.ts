import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPanelComponent } from './app-panel.component';
import { AllPostsComponentComponent } from './posts/all-posts-component/all-posts-component.component';

const routes: Routes = [
  { path: '', component: AppPanelComponent, children:[
    { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
   { path: 'comments', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) }
  ] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPanelRoutingModule { }
