import { Injectable } from '@angular/core';
import { Http, Response } from '@angular//http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from '../../../node_modules/rxjs/Observable';


@Injectable()
export class ApiProvider {
  constructor(private http: Http) {
    console.log('Hello ApiProvider Provider');
  }
  getRandomUser(pageNumber) {
    let urlParam = "?page=" + pageNumber + "&results=10&seed=abc"
    return  this.http.get('https://randomuser.me/api/' + urlParam)
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError)    
  }
  private catchError(error: Response) {
    return Observable.throw(error.json() || "server Error")
  }
  private logResponse(res: Response) {
    console.log(res);
  }
  private extractData(res: Response) {
    return res.json();
  }
}
