import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Cookie } from 'ng2-cookies';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApi } from '../../shared/sdk/services/custom/User';

@Component({
  selector: 'admin-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {   
  constructor(
    private router:Router,
    private UserApi:UserApi
  ) {}

  ngOnInit() { }

  gotoLogin(){
    this.UserApi.logout().subscribe((success) => {
      this.router.navigate(['/login']);
      console.log(success);
    }, (error) => {
      console.log(error);
    })
  }
}
