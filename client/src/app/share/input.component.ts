import { Component, OnInit, Input, Output, EventEmitter, forwardRef, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CrudService } from '../library/_services/crud.service';
import * as global from '../share/global'
import * as dataservice from '../library/_services/data.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
};

@Component({
    selector: 'acInput',
    templateUrl: './input.component.html',
    providers: [CrudService, dataservice.dataService]
})
export class InputComponent implements OnInit, AfterViewInit {
    @Input() conf: any;
    @Output() valueChange = new EventEmitter();

    val: any;
    constructor(private crudService: CrudService, private http: Http) {
    }

    ngAfterViewInit() {
    }

    @Input()
    get value() {
        return this.val;
    }

    set value(v) {
        this.val = v;
        this.valueChange.emit(this.val);
    }

    cari() {

    };

    onSubmit() {
        alert('Masih Dalam Proses Pengembangan');
    };

    ngOnInit() {
        if (this.conf.type == null) {
            this.conf.type = 'text';
        }
        if ((this.conf.judul == null || this.conf.judul == '') && this.conf.type != 'submit') {
            alert('Judul belum di isi');
        }
        if ((this.conf.readonly == null || this.conf.readonly == '') && this.conf.type != 'submit') {
            this.conf.readonly = '';
        }
        if ((this.conf.id == null || this.conf.id == '') && this.conf.type != 'submit') {
            // alert('Id belum di isi');
        }
        if (this.conf.placeholder == null || this.conf.placeholder == '') {
            this.conf.placeholder = this.conf.judul;
        }
        if (this.conf.disabled == null || this.conf.disabled == '') {
            this.conf.disabled = 'false';
        }
        if (this.conf.name == null || this.conf.name == '') {
            this.conf.name = this.conf.id;
        }
        if (this.conf.type == "image") {
            console.log(this.conf.event);
            
            // this.fileChange(this.value);
        }
    }

    public fileChange(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('file', file, file.name);
            let headers = new Headers({ 'Content-Type': 'form-data' });
            let options = new RequestOptions({ headers: headers });
            this.http.post(global.ipApi+"unggahs/image/upload", formData)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                data => {
                    
                },
                error => console.log(error)
            )
        }
    }
}