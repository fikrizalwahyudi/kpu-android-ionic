import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileApi } from '../../../../shared/sdk/services/custom/Profile';
import { Profile } from '../../../../shared/sdk/models/Profile';

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

  constructor(private router: Router, private ProfileApi: ProfileApi, private aktifRouter: ActivatedRoute) {
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

}
