import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Profile_pendidikanApi } from '../../../../shared/sdk/services/custom/Profile_pendidikan';
import { Profile_pendidikan } from '../../../../shared/sdk/models/Profile_pendidikan';

@Component({
  selector: 'app-profile-pendidikan',
  templateUrl: './profile-pendidikan.component.html',
  styles: []
})
export class ProfilePendidikanComponent implements OnInit {
  @Input() idProfile: any;
  katakunci = '';
  showSpinner = true;
  models = new Array<Profile_pendidikan>();
  data = new Profile_pendidikan();
  ket = "baru";

  constructor(private router: Router, private Profile_pendidikanApi: Profile_pendidikanApi) { }

  ngOnInit() {
    this.ambilData();
  }

  ambilData() {
    let q = {
      where: { id_profile: this.idProfile },
      order: 'tahun ASC'
    };

    this.Profile_pendidikanApi.find(q).subscribe((data: Profile_pendidikan[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

  simpan() {
    this.data.id_profile = this.idProfile;
    let id = { id: this.data.id };

    if (this.ket == "edit") {
      this.Profile_pendidikanApi.updateAll(id, this.data).subscribe((info) => {
        // console.log(info);
      }, (error) => {
        console.log(error);
      });
    } else {
      delete this.data.id;
      this.Profile_pendidikanApi.create(this.data).subscribe((info) => {
        this.ambilData();
        // console.log(info);
      }, (error) => {
        console.log(error);
      });
    }
  }

  baru() {
    this.data = new Profile_pendidikan();
    this.ket = "baru";
  }

  edit(data) {
    this.data = data;
    this.ket = "edit";
  }

  hapus(id) {
    this.Profile_pendidikanApi.deleteById(id).subscribe((info) => {
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

    this.Profile_pendidikanApi.find(temp).subscribe((data: Profile_pendidikan[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

}
