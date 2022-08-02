import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
   loginForm
  constructor( private fb:FormBuilder , private serv:ServiceService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
   this.loginForm= this.fb.group({
      email:['',[Validators.required , Validators.email]],
      password:['',[Validators.required]]
    })
  }

  login(form){

    this.serv.SignIn(form.value.email , form.value.password)
  }

}
