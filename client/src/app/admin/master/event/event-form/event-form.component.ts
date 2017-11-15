import { Component, OnInit } from '@angular/core';
import { EventApi } from '../../../../shared/sdk/services/custom/Event';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../../../../shared/sdk/models/Event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styles: []
})
export class EventFormComponent implements OnInit {
  data = new Event();
  ket = "baru";
  temp: any;

  constructor(private router: Router, private EventApi: EventApi, private aktifRouter: ActivatedRoute) {
    this.temp = aktifRouter.params['value'];
    if (this.temp.id) {
      this.ambilData(this.temp.id);
      this.ket = "edit";
    }
  }

  ngOnInit() {
    $("#menu-master").addClass("active");
    $("#menu-event").addClass("active");
  }

  ngOnDestroy() {
    $("#menu-master").removeClass("active");
    $("#menu-event").removeClass("active");
  }

  ambilData(id) {
    this.EventApi.findById(id).subscribe((data: Event) => {
      this.data = data;
    });
  }

  onSubmit() {
    if (this.ket == "edit") {
      this.EventApi.updateAll(this.temp, this.data).subscribe((info) => {
        this.router.navigateByUrl('admin/event');
      }, (error) => {
        console.log(error);
      });
    } else {
      delete this.data.id;
      this.EventApi.create(this.data).subscribe((info) => {
        this.router.navigateByUrl('admin/event');
      }, (error) => {
        console.log(error);
      });
    }
  }

  keList() {
    this.router.navigateByUrl('admin/event');
  }

}
