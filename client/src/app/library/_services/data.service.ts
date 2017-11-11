import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class dataService{
    private msg:String;
    private Obj:any;

    constructor(
    private http: Http
    ) {
    }

    setMsg(msg:String)
    {
        this.msg = msg;
    }

    getMsg(){
        return this.msg
    }

}