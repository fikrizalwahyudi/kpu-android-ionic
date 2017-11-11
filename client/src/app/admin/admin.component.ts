import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserApi } from '../shared/sdk/services/custom/User';
import { User } from '../shared/sdk/models/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  bodyClasses: string = "skin-blue sidebar-mini";
  body = document.getElementsByTagName('body')[0];

  constructor(private router: Router, private UserApi:UserApi) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        
        // console.log(this.UserApi['auth'].getToken());
        if(!this.UserApi.isAuthenticated()) {
          console.log("Silahkan Login Terlebih Dahulu!!");
          this.router.navigate(['/login']);
        }
      }
    });
  }

  ngOnInit() {
    this.body.classList.add("skin-blue");
    this.body.classList.add("sidebar-mini");
  }

  ngOnDestroy() {
    this.body.classList.remove("skin-blue");
    this.body.classList.remove("sidebar-mini");
  }

}
