/*
*   Author: Ivan Ferianda
*   Module: API Service
 */
import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { ip } from '../../share/global';

@Injectable()
export class ApiService {
  constructor(
    private http: Http
  ) {}

  private setHeadersParam(): Headers {
    let headersConfig = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    return new Headers(headersConfig);
  }
  private setHeaders(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
     return Observable.throw(error.json());
  }
  
  get(path:string) : Observable<any>{
    let a = ip;
    return this.http.get(`${a}${path}`)
                    .catch(this.formatErrors)
                    .map((res:Response) => res.json)
  }
  
  post(path: string, body: Object = {}): Observable<any> { 
    let a = ip;
    return this.http.post(`${a}${path}`, JSON.stringify(body), { headers: this.setHeaders() })
        .catch(this.formatErrors)
        .map((res:Response) => res.json());
  }

  postWithParam(path: string, param: string ): Observable<any> { 
    let a = ip;
    return this.http.post(`${a}${path}`, param , { headers: this.setHeadersParam() })
        .catch(this.formatErrors)
        .map((res:Response) => res.json());
  }

}