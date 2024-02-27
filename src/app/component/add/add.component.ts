import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';
import {employee} from '../employeemodel'
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
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // public empy:employee={} as employee;
  createCustomer: FormGroup = new FormGroup({});
  constructor(private employeeservice:MyserviceService,private router:Router) { }

  ngOnInit(): void {
   this.createCustomer = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required)
    });
  }

  onSubmit(form: FormGroup){
    const newUser = {name: form.value.name, email: form.value.email, contact: form.value.contact}; 

    this.employeeservice.createuser(newUser).subscribe((data) => {
      alert(data.message);
      this.router.navigate(['/']);
    }, error => {
      alert("New customer added successfully!");
    })   

   }
}
