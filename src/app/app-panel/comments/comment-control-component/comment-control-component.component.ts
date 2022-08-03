import { Comment } from './../../../interfaces/comment.interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Location}from'@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-comment-control-component',
  templateUrl: './comment-control-component.component.html',
  styleUrls: ['./comment-control-component.component.scss']
})
export class CommentControlComponentComponent implements OnInit {
  comments:FormGroup
  stateData
  constructor(private router:Router , private location:Location ,private fb:FormBuilder , private serv:ServiceService) {
if( router.getCurrentNavigation().extras.state){
  this.stateData= router.getCurrentNavigation().extras.state.data

}  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.comments= this.fb.group({
      name:[this.isUpdate()?this.stateData.element.name:'',[Validators.required]],
       email:[this.isUpdate()?this.stateData.element.email:'',[Validators.required , Validators.email]],
       body:[this.isUpdate()?this.stateData.element.body:'',[Validators.required]],
     })
   }
  back(){
// this.location.back()
this.router.navigate(['panel/comments/all']);

  }
  submit(comment){
let param:Comment={
  postId:1,
  id:1,
  name:  comment.value.name,
  email:comment.value.email,
  body:comment.value.body,
}
this.serv.addcomments(param).subscribe(data=>{
  console.log(data);

  this.back()
})

  }

  isUpdate(){
    return this.stateData?.page==='update'
  }
}
