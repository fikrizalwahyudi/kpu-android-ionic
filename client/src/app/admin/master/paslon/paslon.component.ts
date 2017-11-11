import { Component, OnInit } from '@angular/core';
import { PaslonApi } from '../../../shared/sdk/services/custom/Paslon';
import { Router } from '@angular/router';
import { Paslon } from '../../../shared/sdk/models/Paslon';

@Component({
  selector: 'app-paslon',
  templateUrl: './paslon.component.html',
  styles: []
})
export class PaslonComponent implements OnInit {
  katakunci = '';
  showSpinner = true;
  models = new Array<Paslon>();

  constructor(private router: Router, private PaslonApi: PaslonApi) { }

  ngOnInit() {
    this.ambilData();
  }

  ngOnDestroy() {

  }

  ambilData() {
    /* let w = {
      include: ['calon', 'wakil', 'event']
    }; */

    let w = {
      "include": [
        {
          "relation": "calon",
          "scope": {
            "include": ["profile_pendidikan", "rekam_jejak"]
          }
        },
        {
          "relation": "wakil",
          "scope": {
            "include": ["profile_pendidikan", "rekam_jejak"]
          }
        },
        {
          "relation": "event",
        }
      ]
    }

    this.PaslonApi.find(w).subscribe((data: Paslon[]) => {
      this.models = data;
      this.showSpinner = false;
      console.log(data);
      
    });
  }

  tambah() {
    this.router.navigateByUrl('admin/paslon-form');
  }

  edit(id) {
    this.router.navigateByUrl('admin/paslon-edit/' + id);
  }

  hapus(id) {
    this.PaslonApi.deleteById(id).subscribe((info) => {
      this.ambilData();
    }, (error) => {
      console.log(error);
    });
  }

  cari() {
    this.showSpinner = true;
    let temp = {
      include: ['calon', 'wakil', 'event'],
      where: {
        or: [
          { nomor: { like: '%' + this.katakunci + '%' } },
        ]
      }
    };

    this.PaslonApi.find(temp).subscribe((data: Paslon[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

}
