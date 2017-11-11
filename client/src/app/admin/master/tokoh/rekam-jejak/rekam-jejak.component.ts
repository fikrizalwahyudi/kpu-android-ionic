import { Component, OnInit, Input } from '@angular/core';
import { Rekam_jejakApi } from '../../../../shared/sdk/services/custom/Rekam_jejak';
import { Router } from '@angular/router';
import { Rekam_jejak } from '../../../../shared/sdk/models/Rekam_jejak';

@Component({
  selector: 'app-rekam-jejak',
  templateUrl: './rekam-jejak.component.html',
  styles: []
})
export class RekamJejakComponent implements OnInit {
  @Input() idProfile:any;
  katakunci = '';
  showSpinner = true;
  models = new Array<Rekam_jejak>();
  data = new Rekam_jejak();
  ket = "baru";

  constructor(private router: Router, private Rekam_jejakApi: Rekam_jejakApi) { }

  ngOnInit() {
    this.ambilData();
  }

  ambilData() {
    let q = { 
      where: { id_profile: this.idProfile },
      order: 'tahun ASC' 
    };

    this.Rekam_jejakApi.find(q).subscribe((data: Rekam_jejak[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

  simpan() {
    this.data.id_profile = this.idProfile;
    let id = {id:this.data.id};

    if (this.ket == "edit") {
      this.Rekam_jejakApi.updateAll(id, this.data).subscribe((info) => {
        // console.log(info);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.Rekam_jejakApi.create(this.data).subscribe((info) => {
        this.ambilData();
        // console.log(info);
      }, (error) => {
        console.log(error);
      });
    }
  }
  
  baru() {
    this.data = new Rekam_jejak();
    this.ket = "baru";
  }

  edit(data) {
    this.data = data;
    this.ket = "edit";
  }

  hapus(id) {
    this.Rekam_jejakApi.deleteById(id).subscribe((info) => {
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
          { tahun: { like: '%' + this.katakunci + '%' } },
        ],
        id_profile: this.idProfile
      }
    };

    this.Rekam_jejakApi.find(temp).subscribe((data: Rekam_jejak[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

}
