import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VolunteerserviceService {

  
  constructor(private http: HttpClient) { }

  postData(data){
      this.http.post('https://localhost:44352/api/Volunteer/api/Volunteer', data).subscribe((result)=>{console.warn("result",result);});
  }
}
