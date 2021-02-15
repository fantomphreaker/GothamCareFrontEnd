import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditdeleteoutletserviceService {

  constructor( private http: HttpClient) { }
patchData(outlet, id:Number){
  // this.http.put('https://localhost:44352/api/Outlet/api/Outlet/'+outlet.id, outlet).subscribe((result)=>{console.warn("result",result);});
  console.log(id);
  console.log(outlet);
  this.http.put(`https://localhost:44352/api/Outlet/api/Outlet/${id}`, outlet).subscribe((result)=>{console.warn(result);});
}

deleteData(){

}

}
