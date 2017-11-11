import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'acContentHeader',
    templateUrl: './header.component.html'  
})
export class HeaderComponent implements OnInit {   katakunci:any;   showSpinner:any;
    @Input () conf:any;
    hirarki:any;
    isHirarki:boolean;
    hirarkiwithlink: any;
    isHirarkiwithlink: boolean;
    constructor(private router:Router) {
        
    }

    cari(){};  onSubmit(){alert('Masih Dalam Proses Pengembangan');};   ngOnInit() { 
        if((this.conf.hirarki==null || this.conf.hirarki=='') && this.conf.hirarkiwithlink == null ){
            this.conf.name=[];
            this.isHirarkiwithlink =false;
            this.isHirarki = false;
        }else if(this.conf.hirarki != null){
            this.hirarki=this.conf.hirarki;
            this.isHirarki = true;
            
        }else if(this.conf.hirarkiwithlink != null){
            this.hirarkiwithlink = this.conf.hirarkiwithlink;
            this.isHirarkiwithlink = true;
            console.log("masuk sini hirarkinya");
        }
    }

    gotolink(link:String){
        console.log(link);
        this.router.navigateByUrl('admin/persediaanbarang/principleForm');
    }
}