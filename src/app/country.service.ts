import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Country } from './country';
import { COUNTRIES } from './mock-countries';

@Injectable()
export class CountryService {
  private countriesUrl = '';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCountries(): Promise<Country[]> {
    return Promise.resolve(COUNTRIES);
    // return this.http.get(this.heroesUrl)
    //            .toPromise()
    //            .then(response => response.json().data as Hero[])
    //            .catch(this.handleError);
  }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

}