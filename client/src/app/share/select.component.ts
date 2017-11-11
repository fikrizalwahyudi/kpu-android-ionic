import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileApi } from '../shared/sdk/services/custom/Profile';
import { Profile } from '../shared/sdk/models/Profile';
import { EventApi } from '../shared/sdk/services/custom/Event';
import { Event } from '../shared/sdk/models/Event';

@Component({
    selector: 'acSelect',
    templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {
    @Input() label: string;
    @Input() tabel = 'status';
    @Input() readonly = '';
    @Input() required = 'false';
    @Output() valueChange = new EventEmitter();
    val: any;
    data = new Array;

    constructor(private ProfileApi:ProfileApi, private EventApi:EventApi) {}

    @Input()
    get value() {
        return this.val;
    }

    set value(v) {
        this.val = v;
        this.valueChange.emit(this.val);
    }

    ngOnInit() {
        if (this.tabel == 'profile') {
            this.comboProfile();
        } else if(this.tabel == 'status') {
            this.comboStatus();
        } else if (this.tabel == 'jenisKelamin') {
            this.comboJenisKelamin();
        } else if (this.tabel == 'event') {
            this.comboEvent();
        }

    }

    comboProfile() {
        this.ProfileApi.find().subscribe((x: [Profile]) => {
            x.forEach(temp => {
                var isi = new Array;
                isi['value'] = temp.id;
                isi['text'] = temp.nama;
                this.data.push(isi);
            });
        });
    }

    comboEvent() {
        this.EventApi.find().subscribe((x: [Event]) => {
            x.forEach(temp => {
                var isi = new Array;
                isi['value'] = temp.id;
                isi['text'] = temp.nama;
                this.data.push(isi);
            });
        });
    }

    comboStatus() {
        this.data = [
            {value: 0, text: 'Tidak Aktif'},
            {value: 1, text: 'Aktif'},
        ]
    }

    comboJenisKelamin() {
        this.data = [
            { value: 'l', text: 'Laki-laki' },
            { value: 'p', text: 'Perempuan' },
        ]
    }

}