import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }
//create
  createuser(data:any): Observable<any>{
    return this.http.post<any>("http://localhost:3000/customer",data)
//  .pipe(map((data:any)=>{
//   return data;
//  }))
  }
//displaying
  getuser(): Observable<any>{
    return this.http.get("http://localhost:3000/customers")
  }
//delete

delete(user:any): Observable<any>{
  return this.http.delete("http://localhost:3000/customer/"+user.id)
}
//pass through params
fetchdata(id:number): Observable<any>{
return this.http.get<any>("http://localhost:3000/customer/"+id)
}

//update
update(data:any,id:number): Observable<any>{
return this.http.put<any>("http://localhost:3000/customer/"+id,data)
// .pipe(map((res:any)=>{
//   return res;
// }))
}

}
