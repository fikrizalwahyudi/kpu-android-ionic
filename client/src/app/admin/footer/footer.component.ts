import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {   katakunci:any;   showSpinner:any;

  constructor() { }

  cari(){};  onSubmit(){alert('Masih Dalam Proses Pengembangan');};   ngOnInit() {
  }

}
