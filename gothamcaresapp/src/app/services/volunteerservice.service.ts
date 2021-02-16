import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
/**
 * This service is used by components that wants to carry out Http PUT operation by sending requests to the API. 
 * Whenever a component wants to add a new volunteer to the database, an instance of this service is made and is injected into the respective component that uses this service.
 * The form data that takes the volunteer's data is sent to the API to be added to the database through the postData method which implements http POST.
 * Members:
 * http - Instance of HttpClient through which the http requests are sent to the API.
 * postData() - The method invoked through the instance of this service which takes the formdata of volunteer as parameter 
 */

@Injectable({
  providedIn: 'root'
})
export class VolunteerserviceService {

  
  constructor(private http: HttpClient) { }

  postData(data){
      this.http.post('https://localhost:44352/api/Volunteer/api/Volunteer', data).subscribe((result)=>{console.warn("result",result);});
  }
}
