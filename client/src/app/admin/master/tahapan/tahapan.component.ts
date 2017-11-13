import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnggahApi } from '../../../shared/sdk/services/custom/Unggah';
import { Unggah } from '../../../shared/sdk/models/Unggah';
import { LoopBackConfig } from '../../../shared/sdk/index';

@Component({
  selector: 'app-tahapan',
  templateUrl: './tahapan.component.html',
  styles: []
})
export class TahapanComponent implements OnInit {
  katakunci = '';
  showSpinner = true;
  models = new Array<Unggah>();
  
  urlApi = LoopBackConfig.getPath();
  urlUnggah = this.urlApi+'/api/unggahs/tahapan/upload';
  urlGambar = this.urlApi+'/api/unggahs/tahapan/download/';

  constructor(private router: Router, private UnggahApi: UnggahApi) { }

  ngOnInit() {
    this.ambilData();
  }

  ambilData() {
    this.UnggahApi.getFiles('tahapan').subscribe((data: Unggah[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

  hapus(nama) {
    this.UnggahApi.removeFile('tahapan', nama).subscribe((info) => {
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
