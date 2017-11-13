import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { ProfileApi } from '../../../../shared/sdk/services/custom/Profile';
import { Profile } from '../../../../shared/sdk/models/Profile';
import { LoopBackConfig } from '../../../../shared/sdk/lb.config';

@Component({
  selector: 'app-tokoh-form',
  templateUrl: './tokoh-form.component.html',
  styles: []
})
export class TokohFormComponent implements OnInit {
  data = new Profile();
  ket = "baru";
  temp: any;
  proses = false;

  urlApi = LoopBackConfig.getPath();
  urlUnggah = this.urlApi + '/api/unggahs/foto/upload';
  urlGambar = this.urlApi + '/api/unggahs/foto/download/';

  constructor(private router: Router, private ProfileApi: ProfileApi, private aktifRouter: ActivatedRoute, private http: Http) {
    this.temp = aktifRouter.params['value'];
    if (this.temp.id) {
      this.ambilData(this.temp.id);
      this.ket = "edit";
    }
  }

  ngOnInit() {
    $("#menu-master").addClass("active");
    $("#menu-profile").addClass("active");
  }

  ngOnDestroy() {
    $("#menu-master").removeClass("active");
    $("#menu-profile").removeClass("active");
  }

  ambilData(id) {
    this.ProfileApi.findById(id).subscribe((data: Profile) => {
      this.data = data;
      this.proses = true;
    });
  }

  onSubmit() {
    if (this.ket == "edit") {
      this.ProfileApi.updateAll(this.temp, this.data).subscribe((info) => {
        this.router.navigateByUrl('admin/profile');
      }, (error) => {
        console.log(error);
      });
    } else {
      this.ProfileApi.create(this.data).subscribe((info) => {
        this.router.navigateByUrl('admin/profile');
      }, (error) => {
        console.log(error);
      });
    }
  }

  keList() {
    this.router.navigateByUrl('admin/profile');
  }

  upload(event) {
    let a: File = event.target.files[0];
    this.data.photo = a['lastModified'] + '-' + a.name;

    var fd = new FormData();
    fd.append('file', a, this.data.photo);

    this.http.post(this.urlUnggah, fd)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
        data => { 
          console.log('berhasil di upload');
        },
        error => console.log(error)
      );
  }

}
