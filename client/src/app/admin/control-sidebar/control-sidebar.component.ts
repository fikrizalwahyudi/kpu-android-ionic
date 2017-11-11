import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-control-sidebar',
  templateUrl: './control-sidebar.component.html',
  styleUrls: ['./control-sidebar.component.css']
})
export class ControlSidebarComponent implements OnInit {   katakunci:any;   showSpinner:any;

  constructor() { }

  cari(){};  onSubmit(){alert('Masih Dalam Proses Pengembangan');};   ngOnInit() {
  }

}
