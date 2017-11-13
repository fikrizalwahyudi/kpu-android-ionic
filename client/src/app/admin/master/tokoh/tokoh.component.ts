import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileApi } from '../../../shared/sdk/services/custom/Profile';
import { Profile } from '../../../shared/sdk/models/Profile';
import { LoopBackConfig } from '../../../shared/sdk/lb.config';

@Component({
  selector: 'app-tokoh',
  templateUrl: './tokoh.component.html',
  styles: []
})
export class TokohComponent implements OnInit {

  katakunci = '';
  showSpinner = true;
  models = new Array<Profile>();

  urlApi = LoopBackConfig.getPath();
  urlUnggah = this.urlApi + '/api/unggahs/foto/upload';
  urlGambar = this.urlApi + '/api/unggahs/foto/download/';

  constructor(private router: Router, private profileApi: ProfileApi) { }

  ngOnInit() {
    this.ambilData();
  }

  ambilData() {
    this.profileApi.find().subscribe((data: Profile[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

  tambah() {
    this.router.navigateByUrl('admin/profile-form');
  }

  edit(id) {
    this.router.navigateByUrl('admin/profile-edit/' + id);
  }

  hapus(id) {
    this.profileApi.deleteById(id).subscribe((info) => {
      this.ambilData();
    }, (error) => {
      console.log(error);
    });
  }

  cari() {
    this.showSpinner = true;
    let temp = {
      where: {
        or: [
          { nama: { like: '%' + this.katakunci + '%' } },
          { alamat: { like: '%' + this.katakunci + '%' } },
          { tempat_lahir: { like: '%' + this.katakunci + '%' } },
        ]
      }
    };

    this.profileApi.find(temp).subscribe((data: Profile[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

}
