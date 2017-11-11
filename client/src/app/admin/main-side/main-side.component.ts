import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-main-side',
  templateUrl: './main-side.component.html',
  styleUrls: ['./main-side.component.css']
})
export class MainSideComponent implements OnInit {   katakunci:any;   showSpinner:any;

  constructor() { }

  cari(){};  onSubmit(){alert('Masih Dalam Proses Pengembangan');};   ngOnInit() {
  }

}
