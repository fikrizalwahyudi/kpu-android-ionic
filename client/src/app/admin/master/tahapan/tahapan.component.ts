import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnggahApi } from '../../../shared/sdk/services/custom/Unggah';
import { Unggah } from '../../../shared/sdk/models/Unggah';

@Component({
  selector: 'app-tahapan',
  templateUrl: './tahapan.component.html',
  styles: []
})
export class TahapanComponent implements OnInit {
  katakunci = '';
  showSpinner = true;
  models = new Array<Unggah>();
  urlUnggah = 'http://localhost:3000/api/unggahs/foto/upload';
  urlGambar = 'http://localhost:3000/api/unggahs/foto/download/';

  constructor(private router: Router, private UnggahApi: UnggahApi) { }

  ngOnInit() {
    this.ambilData();
  }

  ambilData() {
    this.UnggahApi.getFiles('foto').subscribe((data: Unggah[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

  hapus(nama) {
    this.UnggahApi.removeFile('foto', nama).subscribe((info) => {
      this.ambilData();
    }, (error) => {
      console.log(error);
    });
  }

  setelahUpload(event:any) {
    // console.log(event);
    this.ambilData();
  }

}
