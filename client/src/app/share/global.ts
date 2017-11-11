import { Cookie } from 'ng2-cookies';
'use strict';

export const token=Cookie.get('access_token');
export const ip='http://autoclean-api.akonteknologi.co.id/';
export const ipApi ='http://localhost:3000/api/';
export const idKpa=1;

export function getUrl(url:string):string {
    return ip + url + "?access_token=" + Cookie.get('access_token');
}
