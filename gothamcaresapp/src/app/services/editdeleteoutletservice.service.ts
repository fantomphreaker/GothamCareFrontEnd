import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/**
 * This service is used by components that wants to carry out Http PUT operation by sending requests to the API. 
 * Whenever a component wants to edit the details of an Outlet, an instance of this service is made and is injected into the respective component that uses this service.
 * Members:
 * http - Instance of HttpClient through which the http requests are sent to the API.
 * patchData() - The method invoked through the instance of this service from the component that uses this service. It takes the outlet form data and outlet ID as parameter.
 */

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
