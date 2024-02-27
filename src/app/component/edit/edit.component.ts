import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';
import {employee} from '../employeemodel';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface gender{
  value:string;
  viewvalue:string;
}
interface userposition{
  value:string;
  viewvalue:string;
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // public empy:employee={} as employee;
  public dataid:any;
  // public mydata:any;
  // formdata: any = {};
  updateCustomer: FormGroup = new FormGroup({});
 
  constructor(private customerService:MyserviceService,private Activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.updateCustomer = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required)
    });
   this.Activatedroute.paramMap.subscribe((param: Params) => {
    this.dataid = +param['get']('id');  

    this.customerService.fetchdata(this.dataid).subscribe((data:any)=>{
      this.updateCustomer.setValue({name: data[0].name, email: data[0].email, contact: data[0].contact });
    })
    })
    
  }

  onSubmit(form:FormGroup){
    const updatedUser = {name: form.value.name, email: form.value.email, contact: form.value.contact}; 
  this.customerService.update(updatedUser,this.dataid).subscribe((data:any)=>{
    alert('data updated sucessfully!!!')
  this.router.navigate(['/view'])
  })
  }
}
