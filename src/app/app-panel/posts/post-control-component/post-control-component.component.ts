import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Location}from'@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-post-control-component',
  templateUrl: './post-control-component.component.html',
  styleUrls: ['./post-control-component.component.scss']
})
export class PostControlComponentComponent implements OnInit {
  posts:FormGroup
  stateData
  constructor(private router:Router , private location:Location ,private fb:FormBuilder , private serv:ServiceService) {
if( router.getCurrentNavigation().extras.state){
  this.stateData= router.getCurrentNavigation().extras.state.data

}  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.posts= this.fb.group({
       title:[this.isUpdate()?this.stateData.element.title:'',[Validators.required ]],
       body:[this.isUpdate()?this.stateData.element.body:'',[Validators.required]]
     })
   }
  back(){
// this.location.back()
this.router.navigate(['panel/posts/all']);

  }
  submit(posts){
let param={
  userId:1,
  id:1,
  title: posts.value.title,
  body:posts.value.body
}
this.serv.addPosts(param).subscribe(data=>{
  console.log(data);

  this.router.navigate(['panel/posts/all']);
})

  }

  isUpdate(){
    return this.stateData?.page==='update'
  }
}
