import { Component, OnInit } from '@angular/core';
import { UserApi } from '../../shared/sdk/services/custom/User';
import { UnggahApi } from '../../shared/sdk/services/custom/Unggah';
import { Unggah } from '../../shared/sdk/models/Unggah';
import { Http, Jsonp, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {   
  data:any;
  models = new Array<Unggah>();
  constructor(private UserApi:UserApi, private UnggahApi:UnggahApi, private http:Http) { }

  ngOnInit() {
    this.data = this.UserApi['auth'].getToken().user;

    // let token = this.UserApi['auth'];
    // console.log(token);

    this.UnggahApi.getFiles('foto').subscribe((data: Unggah) => {
      console.log(data);
    });
    
    // this.UnggahApi.download('foto', 'sarginsu.txt').subscribe((info) => {
    //   console.log(info);
    // });
  }

  onSubmit(){
    let temp = {id: this.data.id}
    console.log(this.data);
    /* this.UserApi.updateAll(temp, this.data).subscribe((info) => {
      console.log(info);
      // this.router.navigateByUrl('admin/penyedia');
    }, (error) => {
      console.log(error);
    }); */
  }

  upload(event) {
    let a: File = event.target.files[0];
    // this.data.gambar = a.name;

    var fd = new FormData();
    fd.append('file', a, a['lastModified']+'-'+a.name);

    this.http.post('http://localhost:3000/api/unggahs/foto/upload', fd)
    .map(res => res.json())
    .catch(error => Observable.throw(error))
    .subscribe(
      data => { console.log(data) },
      error => console.log(error)
    );
    
    // this.UnggahApi.upload('foto', a).subscribe((info) => {
    //   console.log('berhasil');
    //   console.log(info);
    // }, (error) => {
    //   console.log('error');
    //   console.log(error);
    // });
  }

}
