import { PostControlComponentComponent } from './post-control-component/post-control-component.component';
import { AllPostsComponentComponent } from './all-posts-component/all-posts-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';

const routes: Routes = [{ path: '', component:PostsComponent , children:[
  {path:'all' , component:AllPostsComponentComponent},
  {path:'control' , component:PostControlComponentComponent},
  //  {path:'', redirectTo:'all' , pathMatch:'full'},

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
