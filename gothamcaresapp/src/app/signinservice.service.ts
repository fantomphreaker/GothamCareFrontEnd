import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninserviceService {

  private apiurl = "https://localhost:44352/api/Admin/Login/";
  constructor(private http: HttpClient) { }
  
  getData(data){
    return this.http.get(this.apiurl+data.Email+"/"+data.Password);
  }
}
