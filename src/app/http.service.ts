import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { TestDataModel } from './test-data.model';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {

  }

  getTestData(): Observable<TestDataModel> {
    return this.http.get<TestDataModel>(environment.backend_url + '/getData', {headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })});
  }
}
