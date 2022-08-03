import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './../../../interfaces/post.interface';
import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceService } from 'src/app/services/service.service';


const ELEMENT_DATA: any=[{}]


@Component({
  selector: 'app-all-posts-component',
  templateUrl: './all-posts-component.component.html',
  styleUrls: ['./all-posts-component.component.scss']
})

export class AllPostsComponentComponent implements OnInit, AfterViewInit , OnDestroy{

  displayedColumns: string[] = ['position', 'title', 'body','operations'];
  dataSource= new MatTableDataSource<Post>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
   $data
   $postData
  constructor( private serv:ServiceService, private router:Router) { }
  ngOnDestroy(): void {
    this.$data.unsubscribe()
  }

  ngOnInit(): void {
    this.getPosts()

  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  getPosts(){
    this.$data=this.serv.getPosts().subscribe((data:any)=>{
       this.$postData=data
      this.dataSource = new MatTableDataSource<Post>(data);
      this.dataSource.paginator = this.paginator;
    },(err=>{
      alert("Post error")
    }))
  }

  delete(ele){
    // console.log(ele);

    this.serv.deletePosts(ele.id).subscribe(data=>{
      this.dataSource = new MatTableDataSource<Post>(this.$postData.filter(item=>item.id !== ele.id));
    })
  }
  trackPost(index: number, item: Post): string {
    return `${item.id}`;
  }
  navigateTo(page , ele){
    page==='update'? this.router.navigate(['panel/posts/control'],{state:{data:{page:'update' , element:ele}}}):
    this.router.navigate(['panel/posts/control'],{state:{data:{page:'insert' , element:ele}}});
  }
}




