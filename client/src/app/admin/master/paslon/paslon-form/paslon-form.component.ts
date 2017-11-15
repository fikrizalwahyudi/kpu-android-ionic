import { Component, OnInit } from '@angular/core';
import { PaslonApi } from '../../../../shared/sdk/services/custom/Paslon';
import { Paslon } from '../../../../shared/sdk/models/Paslon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paslon-form',
  templateUrl: './paslon-form.component.html',
  styles: []
})
export class PaslonFormComponent implements OnInit {
  data = new Paslon();
  ket = "baru";
  temp: any;

  constructor(private router: Router, private PaslonApi: PaslonApi, private aktifRouter: ActivatedRoute) {
    this.temp = aktifRouter.params['value'];
    if (this.temp.id) {
      this.ambilData(this.temp.id);
      this.ket = "edit";
    }
  }

  ngOnInit() {
    $("#menu-master").addClass("active");
    $("#menu-paslon").addClass("active");
  }

  ngOnDestroy() {
    $("#menu-master").removeClass("active");
    $("#menu-paslon").removeClass("active");
  }

  ambilData(id) {
    this.PaslonApi.findById(id).subscribe((data: Paslon) => {
      this.data = data;
    });
  }

  onSubmit() {
    if (this.ket == "edit") {
      this.PaslonApi.updateAll(this.temp, this.data).subscribe((info) => {
        this.router.navigateByUrl('admin/paslon');
      }, (error) => {
        console.log(error);
      });
    } else {
      delete this.data.id;
      this.PaslonApi.create(this.data).subscribe((info) => {
        this.router.navigateByUrl('admin/paslon');
      }, (error) => {
        console.log(error);
      });
    }
  }

  keList() {
    this.router.navigateByUrl('admin/paslon');
  }

}
