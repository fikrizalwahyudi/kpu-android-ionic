import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { Http, RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as global from '../../share/global';

@Injectable()
export class CrudService {
constructor(private router: Router,private http:Http){

}

    hapus(callback:(n:any) => void){
        swal({
            title: 'Anda yakin',
            text: "Anda tidak akan dapat mengembalikan data ini",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'tidak',
        }).then( () => {
            
        });
    }


    httpGetCallback(items,url,jenis='edit',asal='\\',alert='false',callback:(n:any) => void){
        this.http.get(global.ip+url+"&access_token="+Cookie.get('access_token'))
        .map(res => res.json())
        .subscribe(
        tt => {
                items=tt;
                if(alert){
                    swal(
                        'Data berhasil di proses',
                        '',
                        'success'
                    );
                }
                callback(tt);
                return tt;
            } ,
        error => console.log(error));
    }

    httpGetCallback3(items,url,jenis='edit',alert,callback:(n:any) => void){
        if(alert=='delete'){
            swal({
                title: 'Anda yakin',
                text: "Anda tidak akan dapat mengembalikan data ini",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya',
                cancelButtonText: 'tidak',
            }).then( () => {
                this.http.get(global.ip+url+"&access_token="+Cookie.get('access_token'),items)
                .map(res => res.json())
                .subscribe(
                tt => {
                    swal({
                        title: 'Data Sudah Di proses',
                        text: '',
                        timer: 2000
                    }).then(
                        () => { //saat di pilih ok
                                callback(tt);
                        },
                        (dismiss) => { //saat waktu habis
                            if (dismiss === 'timer') {
                                callback(tt);
                            }
                        }
                    )
                } ,
                error => console.log(error));
            });
        }else{
            this.http.get(global.ip+url+"&access_token="+Cookie.get('access_token'),items)
                .map(res => res.json())
                .subscribe(
                tt => {
                        // swal(
                        //     'Data berhasil di proses',
                        //     '',
                        //     'success'
                        // );
                        // tt.jenisBarang=tt.jenisBarang.id;
                        // console.log(tt);
                    callback(tt);
                } ,
                error => console.log(error));
        }
    }

    httpGetCallback2(items,url,alert,callback:(n:any) => void){
        if(alert=='delete'){
            swal({
                title: 'Anda yakin',
                text: "Anda tidak akan dapat mengembalikan data ini",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya',
                cancelButtonText: 'tidak',
            }).then( () => {
                this.http.get(global.ip+url+"&access_token="+Cookie.get('access_token'),items)
                .map(res => res.json())
                .subscribe(
                tt => {
                    swal({
                        title: 'Data Sudah Di proses',
                        text: tt.message,
                        timer: 2000
                    }).then(
                        () => { //saat di pilih ok
                                callback(tt);
                        },
                        (dismiss) => { //saat waktu habis
                            if (dismiss === 'timer') {
                                callback(tt);
                            }
                        }
                    )
                } ,
                error => console.log(error));
            });
        }else{
            this.http.get(global.ip+url+"&access_token="+Cookie.get('access_token'),items)
                .map(res => res.json())
                .subscribe(
                tt => {
                        // swal(
                        //     'Data berhasil di proses',
                        //     '',
                        //     'success'
                        // );

                    callback(tt);
                } ,
                error => console.log(error));
        }
    }

    httpPostCallback(items,url,alert,callback:(n:any) => void){
        if(alert=='delete'){
        swal({
            title: 'Anda yakin',
            text: "Anda tidak akan dapat mengembalikan data ini",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'tidak',
        }).then( () => {
            this.http.post(global.ip+url+"&access_token="+Cookie.get('access_token'),items)
                .map(res => res.json())
                .subscribe(
                tt => {
                        console.log(tt.message)
                        swal(
                            'Success Message.',
                            tt.message.toString(),
                            'success'
                        );

                    callback(tt);
                } ,
                error => console.log(error));
        });
        }else{
            this.http.post(global.ip+url+"&access_token="+Cookie.get('access_token'),items)
                .map(res => res.json())
                .subscribe(
                tt => {
                        console.log(tt.message)
                        if(tt.message.toString().indexOf("sukses") !== -1)
                        {
                            swal(
                                'Success Message',
                                tt.message.toString(),
                                'success'
                            );
                        }else{
                            swal(
                                'Oops',
                                tt.message.toString(),
                                'error'
                            );
                        }
                    callback(tt);
                } ,
                error => console.log(error));
        }
    }

    http_get(items,url,jenis,asal,alert){
        this.http.get(global.ip+url+"&access_token="+Cookie.get('access_token'))
        .map(res => res.json())
        .subscribe(
        tt => {
                items=tt;
                console.log(tt);
                if(alert){
                    swal(
                        'Data berhasil di proses',
                        '',
                        'success'
                    );
                }
                return tt;
            } ,
        error => console.log(error));
    }

    insertAjax(items,url,jenis,asal){
        $.ajax({
                url: global.ip+url+"&access_token="+Cookie.get('access_token'),
                type: 'POST',
                dataType: 'json',
                contentType:'application/json',
                data: JSON.stringify( items),
                success: (data, textStatus, xhr)=> {
                    swal(
                        'Data berhasil di proses',
                        '',
                        'success'
                    );
                    this.router.navigateByUrl(asal);
                    
                },
                error: (xhr, textStatus, errorThrown)=> {
                    console.log('error');
                    console.log(textStatus);
                    console.log(errorThrown);
                    swal({
                        title: 'Oops, session anda habis,l kembali',
                        text: "Jika pesan ini terus berulang, hub customer service kami",
                        width: 600,
                        padding: 100,
                        background: '#fff url(//bit.ly/1Nqn9HU)'
                    })
                    // Cookie.delete('access_token');
                    // this.router.navigateByUrl('/login');
                }
            });
    }

    insertAjaxGet(items,url,jenis,asal){
        $.ajax({
                // url: global.ip+'doctor/add/doctorWithSchedule?access_token='+Cookie.get('access_token'),
                url: global.ip+url+"&access_token="+Cookie.get('access_token'),
                type: 'Get',
                dataType: 'json',
                contentType:'application/json',
                data: JSON.stringify( items),
                success: (data, textStatus, xhr)=> {
                    swal(
                        'Data berhasil di proses',
                        '',
                        'success'
                    );
                    this.router.navigateByUrl(asal);
                    
                },
                error: (xhr, textStatus, errorThrown)=> {
                    console.log('error');
                    console.log(textStatus);
                    console.log(errorThrown);
                    swal({
                        title: 'Oops, session anda habis, silahkan login kembali',
                        text: "Jika pesan ini terus berulang, hub customer service kami",
                        width: 600,
                        padding: 100,
                        background: '#fff url(//bit.ly/1Nqn9HU)'
                    })
                    // Cookie.delete('access_token');
                    // this.router.navigateByUrl('/login');
                }
            });
    }

    insertImage(items,event,ukuran='large'){
        var jenis='image'
        let fileList: FileList = event.target.files;
        console.log(items);
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            formData.append('type',jenis);
            formData.append('file', file, file.name);
            let headers = new Headers({ 'Content-Type': 'form-data' });
            let options = new RequestOptions({ headers: headers });
            this.http.post(global.ip+'file/upload?access_token='+Cookie.get('access_token'), formData)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                    data => {console.log(items),console.log(data),items.image=data.url},
                    error => console.log(error)
            )
        }
    }
}