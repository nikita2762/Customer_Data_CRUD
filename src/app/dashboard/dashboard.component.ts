// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private custService: MyserviceService){}
  ngOnInit(): void {
    this.custService.getuser().subscribe((customerList) => {
      console.log(customerList);
    })
  }
  // Add any logic or data fetching for the dashboard here

  
}
