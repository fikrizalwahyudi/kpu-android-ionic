import { Component, OnInit } from '@angular/core';
import { Http, JsonpModule, Jsonp, Response,Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
// import * as global from '../share/global'; 
// import swal from 'sweetalert2';
// import {NgForm} from '@angular/forms';
// import { Injectable } from '@angular/core';
// import { Cookie } from 'ng2-cookies';
// import { ApiService } from '../library/_services/api.service';

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserApi } from '../shared/sdk/services/custom/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {email:"admin@mail.com", password:""}; 

  constructor(
    private router:Router, 
    private UserApi:UserApi
  ){}

  ngOnInit() {

  }

  ngOnDestroy() { }

  ngAfterViewInit() { }

  onSubmit() {
    this.UserApi.login(this.credentials).subscribe((info) => {
      this.router.navigate(['/admin']);
    }, (error) => {
      alert(error.message);
    });
  }

  gotoAdmin(){
  }

}
