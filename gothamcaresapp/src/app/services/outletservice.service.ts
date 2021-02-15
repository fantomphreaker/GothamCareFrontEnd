import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
/**
 * This service is used by the components to make http GET requests to the API and fetch the list of outlets from the db.
 * Members:
 * apiurl - variable which is used to store the url of the host.
 * http - An instance of the Http client. Http CRUD requests are carried out using this instance.
 * getData() - Method which is involked everytime when the list of all the outlets are required from the database. The body of the method implements the http GET request to fetch data.
 */

@Injectable({
  providedIn: 'root'
})
export class OutletserviceService {

  private finaldata = [];
  private apiurl = "https://localhost:44352/api/Outlet/api/Outlet";
  constructor(private http: HttpClient) { }
  
  getData(){
    return this.http.get(this.apiurl);
  }

  
}

