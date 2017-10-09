import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Dutyrate }     from './dutyrate';
import { SearchParams } from './searchparams';

@Injectable()
export class DutyrateService {
  private dutyrateUrl   = 'https://api.trade.gov/v1/tariff_rates/search?api_key=hTJinF9K_w71OVx06lZkb3JX';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  search(params: SearchParams): Promise<Dutyrate[]> {
    var srcCountryStr = "";
    if (params.from != "United States")
      srcCountryStr = "&reporter_names="+params.from.split(" ").join("+");
    else
      srcCountryStr = "&reporter_names="+params.to.split(" ").join("+");

    var searchStr     = "&q="+params.term;

    return this.http.get(this.dutyrateUrl+srcCountryStr+searchStr)
               .toPromise()
               .then(
                response => response.json().results as Dutyrate[]
                )
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}