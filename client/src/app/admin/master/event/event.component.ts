import { Component, OnInit } from '@angular/core';
import { EventApi } from '../../../shared/sdk/services/custom/Event';
import { Event } from '../../../shared/sdk/models/Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styles: []
})
export class EventComponent implements OnInit {

  katakunci = '';
  showSpinner = true;
  models = new Array<Event>();

  constructor(private router: Router, private EventApi: EventApi) { }

  ngOnInit() {
    this.ambilData();
  }

  ngOnDestroy() {

  }

  ambilData() {
    this.EventApi.find().subscribe((data: Event[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

  tambah() {
    this.router.navigateByUrl('admin/event-form');
  }

  edit(id) {
    this.router.navigateByUrl('admin/event-edit/' + id);
  }

  hapus(id) {
    this.EventApi.deleteById(id).subscribe((info) => {
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
          { nama: { like: '%' + this.katakunci + '%' } },
          { keterangan: { like: '%' + this.katakunci + '%' } },
        ]
      }
    };

    this.EventApi.find(temp).subscribe((data: Event[]) => {
      this.models = data;
      this.showSpinner = false;
    });
  }

}
