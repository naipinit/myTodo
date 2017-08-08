import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppSettingsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

const CONFIG = {
  apiUrl: 'http://localhost:3001/',
};


@Injectable()
export class AppSettingsProvider {

  constructor(public http: Http) {
    console.log('Hello AppSettingsProvider Provider');
  }

  public getApiUrl() {
    return CONFIG.apiUrl;
  }

}
