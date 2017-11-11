import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JadwalApi } from '../../../../shared/sdk/services/custom/Jadwal';
import { Jadwal } from '../../../../shared/sdk/models/Jadwal';

@Component({
  selector: 'app-jadwal-form',
  templateUrl: './jadwal-form.component.html',
  styles: []
})
export class JadwalFormComponent implements OnInit {
  data = new Jadwal();
  ket = "baru";
  temp: any;

  constructor(private router: Router, private JadwalApi: JadwalApi, private aktifRouter: ActivatedRoute) {
    this.temp = aktifRouter.params['value'];
    if (this.temp.id) {
      this.ambilData(this.temp.id);
      this.ket = "edit";
    }
  }

  ngOnInit() {
    $("#menu-master").addClass("active");
    $("#menu-jadwal").addClass("active");
  }

  ngOnDestroy() {
    $("#menu-master").removeClass("active");
    $("#menu-jadwal").removeClass("active");
  }

  ambilData(id) {
    this.JadwalApi.findById(id).subscribe((data: Jadwal) => {
      this.data = data;
    });
  }

  onSubmit() {
    if (this.ket == "edit") {
      this.JadwalApi.updateAll(this.temp, this.data).subscribe((info) => {
        this.router.navigateByUrl('admin/jadwal');
      }, (error) => {
        console.log(error);
      });
    } else {
      this.JadwalApi.create(this.data).subscribe((info) => {
        this.router.navigateByUrl('admin/jadwal');
      }, (error) => {
        console.log(error);
      });
    }
  }

  keList() {
    this.router.navigateByUrl('admin/jadwal');
  }

}
