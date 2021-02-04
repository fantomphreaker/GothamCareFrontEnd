import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

