import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';
import {employee} from '../employeemodel';
interface gender{
  value:string;
  viewvalue:string;
}
interface userposition{
  value:string;
  viewvalue:string;
}
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  public empy:employee={} as employee;
  public watchid:any;
  public mydata:any;
  formdata: any = {};
  usergender:gender[] =[
   
     {value:'male',viewvalue:'male'},
     {value:'female',viewvalue:'female'}
   
  ]
 
  position:userposition[] =[
   
   {value:'Angular developer',viewvalue:'Angular developer'},
   {value:'React developer',viewvalue:'React developer'},
   {value:'java developer',viewvalue:'java developer'},
 
 ]
  constructor(private customerService:MyserviceService,private Activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe((param: Params) => {
     this.watchid = param['get']('watchid');
   
     })
     this.customerService.fetchdata(this.watchid).subscribe((data:any)=>{
   this.empy= data;
  // console.log(data);
     })
     
}

}