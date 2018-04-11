import {Http, RequestOptions, Headers, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class YelpSearchService {

  baseUrl = environment.baseUrl;

  key = 'OnR09pM7Fjg06is4fE3q4CCiXz96G5j-LMpVxii78aWzRa_hgSEqTJOE1STY5BSlzItCiL4Qc1H6ONIyEb0XBRuJedt4vIqvArls2SnzZAoikgWbeMw9C5ddaUTNWnYx';
  // secret = '';
  // queryBase = 'https://api.yelp.com/v3/businesses/search?term=TERM&latitude=LATITUDE&longitude=LONGITUDE';

  constructor(private http: Http) {}

  searchRst(latitude: any, longitude: any, searchTerm: any) {
    // const url = this.queryBase
    //   .replace('LATITUDE', latitude)
    //   .replace('LONGITUDE', longitude)
    //   .replace('TERM', searchTerm);
    //
    // console.log(url);
    //
    // const headers = new Headers();
    // // headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Bearer ' + this.key);
    //
    // const options = new RequestOptions({ headers: headers });
    // return this.http.get(url, options);
    return this.http.get(this.baseUrl + '/api/rst/yelp/search?latitude=' + latitude + '&longitude=' + longitude + '&term=' + searchTerm)
      .map((res: Response) => {
        return res.json();
      });
  }
}
