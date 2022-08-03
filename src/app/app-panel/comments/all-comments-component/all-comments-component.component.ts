import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './../../../interfaces/post.interface';
import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceService } from 'src/app/services/service.service';
import { Comment } from 'src/app/interfaces/comment.interfaces';


const ELEMENT_DATA: any=[{}]
@Component({
  selector: 'app-all-comments-component',
  templateUrl: './all-comments-component.component.html',
  styleUrls: ['./all-comments-component.component.scss']
})
export class AllCommentsComponentComponent implements OnInit, AfterViewInit , OnDestroy{

  displayedColumns: string[] = ['position', 'name', 'email', 'body','operations'];
  dataSource= new MatTableDataSource<Comment>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
   $data
   $postData
  constructor( private serv:ServiceService, private router:Router) { }
  ngOnDestroy(): void {
    this.$data.unsubscribe()
  }

  ngOnInit(): void {
    this.getComments()

  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  getComments(){
    this.$data=this.serv.getcomments().subscribe((data:any)=>{
       this.$postData=data
      this.dataSource = new MatTableDataSource<Comment>(data);
      this.dataSource.paginator = this.paginator;
    },(err=>{
      alert("Post error")
    }))
  }

  delete(ele){
    // console.log(ele);

    this.serv.deletePosts(ele.id).subscribe(data=>{
      this.dataSource = new MatTableDataSource<Comment>(this.$postData.filter(item=>item.id !== ele.id));
    })
  }
  trackPost(index: number, item: Post): string {
    return `${item.id}`;
  }
  navigateTo(page , ele){
    page==='update'? this.router.navigate(['panel/comments/control'],{state:{data:{page:'update' , element:ele}}}):
    this.router.navigate(['panel/comments/control'],{state:{data:{page:'insert' , element:ele}}});
  }
}




