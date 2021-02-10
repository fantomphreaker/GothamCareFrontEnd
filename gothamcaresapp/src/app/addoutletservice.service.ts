import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddoutletserviceService {

  constructor(private http: HttpClient) { }

  postData(data){
      this.http.post('https://localhost:44352/api/Outlet/api/Outlet', data).subscribe((result)=>{console.warn("result",result);});
  }
}
