import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninserviceService } from '../signinservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public response;

  constructor(private _router:Router, private signinservice:SigninserviceService) { }
  
  onSubmit(data){
    this.navigateToAdmin();
  //   this.response = this.signinservice.getData(data).subscribe(x => {if(x == "Login Successful"){
  //     this.response = true;
  //   }else{this.response = false;}
  // });
  //   // if(this.response == "Login Success"){
  //   //   this.navigateToAdmin();
  //   // }
  //   console.log(this.response);
    
}

 
  navigateToAdmin(){
    this._router.navigate(['admin']);
  }

  ngOnInit(): void {
  }

}
