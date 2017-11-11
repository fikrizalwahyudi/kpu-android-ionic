import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'admin-dashboard1',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class Dashboard1Component implements OnInit {
  katakunci = '';
  showSpinner = true;

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    
  }

  tambah() {

  }

  cari() {
    
  }

}
