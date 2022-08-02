import { Observable } from 'rxjs';
import { Injectable,NgZone } from '@angular/core';
import{HttpClient}from'@angular/common/http'
import { Post } from '../interfaces/post.interface';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http :HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) { }

  getPosts():Observable<Post>{
    return this.http.get<Post>('posts')
  }
 addPosts(data:Post):Observable<Post>{
    return this.http.post<Post>('posts', data)
  }
 updatePosts(data:Post , id:number):Observable<Post>{
    return this.http.put<Post>('posts'+id , data)
  }
deletePosts(id:number):Observable<Post>{
    return this.http.delete<Post>('posts'+id)
  }

  getcomments():Observable<Post>{
    return this.http.get<Post>('comments')
  }
 addcomments(data:Post):Observable<Post>{
    return this.http.post<Post>('comments', data)
  }
 updatecomments(data:Post , id:number):Observable<Post>{
    return this.http.put<Post>('comments'+id , data)
  }
deletecomments(id:number):Observable<Post>{
    return this.http.delete<Post>('comments'+id)
  }

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log("uuu",result)
        this.router.navigate(['panel'])
          localStorage.setItem('inter',result.user.refreshToken)


      })
      .catch((error) => {
       localStorage.setItem('inter',null)

      });
  }
}
