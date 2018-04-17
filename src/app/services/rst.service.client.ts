import { Rst } from '../models/rst.model.client';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class RstService {
  constructor(private http: Http) { }

  baseUrl = environment.baseUrl;

  dumpRst() {
    return new Rst(undefined, undefined, undefined);
  }

  createRstForOwner(userId: String, rst: Rst) {
    return this.http.post(this.baseUrl + '/api/rst/user/' + userId, rst)
      .map((res: Response) => {
        return res.json();
      });
  }

  createRstWithoutOwner(rst: Rst) {
    return this.http.post(this.baseUrl + '/api/rst/yelp', rst)
      .map((res: Response) => {
        return res.json();
      });
  }

  findRstById(rstId: String) {
    return this.http.get(this.baseUrl + '/api/rst/' + rstId)
      .map((res: Response) => {
        return res.json();
      });
  }

  findRstsByUser(userId: String) {
    return this.http.get(this.baseUrl + '/api/rst/user/' + userId)
      .map((res: Response) => {
        return res.json();
      });
  }

  findRstByYelpId(rstYelpId: String) {
    return this.http.get(this.baseUrl + '/api/rst/yelp/' + rstYelpId)
      .map((res: Response) => {
        return res.json();
      });
  }
}
