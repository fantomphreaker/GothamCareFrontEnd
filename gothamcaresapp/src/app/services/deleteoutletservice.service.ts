import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteoutletserviceService {

  constructor(private http: HttpClient) { }

  deleteData(outlet){
    this.http.delete(`https://localhost:44352/api/Outlet/api/Outlet/${outlet.id}`).subscribe((result)=>{console.warn(result);});
  }
}
