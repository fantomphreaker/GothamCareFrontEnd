import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninserviceService } from '../services/signinservice.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public response;
 

  constructor(private fb: FormBuilder, private _router:Router, private signinservice:SigninserviceService) { }

  signinform = this.fb.group({
    email: [''],
    password: [''],
  });

  
  
  onSubmit(){
    // this.navigateToAdmin();
    this.signinservice.login(this.signinform.controls["email"].value, this.signinform.controls["password"].value).subscribe(response =>{
      this.response = response;
      console.log(this.response);
      // this.checkResponse();
      if(this.response.response == "Login Success"){
        this.navigateToAdmin();
      }
    });
    // if(this.response == "Login Success"){
    //   this.navigateToAdmin();
    // }
    //console.log(this.response);
  }
  
  private checkResponse(): void{
    // if(this.response.message == "Login Success"){
    //   this.navigateToAdmin();
    // }
    //this.navigateToAdmin()
    
  }

 
  navigateToAdmin(){
    this._router.navigate(['admin']);
  }

  ngOnInit(): void {
  }

}
