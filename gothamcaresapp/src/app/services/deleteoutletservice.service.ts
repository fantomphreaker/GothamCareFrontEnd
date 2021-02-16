import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/**
 * This service is used by components that wants to carry out Http Delete operation by sending requests to the API. 
 * Whenever a component wants to delete  an Outlet, an instance of this service is made and is injected into the respective component that uses this service.
 * Members:
 * http - Instance of HttpClient through which the http requests are sent to the API.
 * deleteData() - This method is invoked through the instance of this service by the respective component that uses this service. It takes an Outlet as argument. THe body of this method implements Http DELETE though the instance http.
 */
 

@Injectable({
  providedIn: 'root'
})
export class DeleteoutletserviceService {

  constructor(private http: HttpClient) { }

  deleteData(outlet){
    this.http.delete(`https://localhost:44352/api/Outlet/api/Outlet/${outlet.id}`).subscribe((result)=>{console.warn(result);});
  }
}
