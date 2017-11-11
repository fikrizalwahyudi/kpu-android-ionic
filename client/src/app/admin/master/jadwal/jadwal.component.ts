import { Component, OnInit } from '@angular/core';
import { JadwalApi } from '../../../shared/sdk/services/custom/Jadwal';
import { Router } from '@angular/router';
import { Jadwal } from '../../../shared/sdk/models/Jadwal';

@Component({
  selector: 'app-jadwal',
  templateUrl: './jadwal.component.html',
  styles: []
})
export class JadwalComponent implements OnInit {
  katakunci = '';
  showSpinner = true;
  models = new Array<Jadwal>();

  constructor(private router: Router, private JadwalApi: JadwalApi) { }

  ngOnInit() {
    this.ambilData();
  }

  ngOnDestroy() {

  }

  ambilData() {
    let q = {
      order: "tgl_mulai ASC"
    }
    this.JadwalApi.find(q).subscribe((data: Jadwal[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

  tambah() {
    this.router.navigateByUrl('admin/jadwal-form');
  }

  edit(id) {
    this.router.navigateByUrl('admin/jadwal-edit/' + id);
  }

  hapus(id) {
    this.JadwalApi.deleteById(id).subscribe((info) => {
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
          { keterangan: { like: '%' + this.katakunci + '%' } },
        ]
      },
      order: "tgl_mulai ASC"
    };

    this.JadwalApi.find(temp).subscribe((data: Jadwal[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

}
