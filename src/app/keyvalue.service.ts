import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from './app.component';

@Injectable()
export class KeyvalueService {
  apiURLNewKey: string = 'https://api.keyvalue.xyz/new/myKey';
  apiURL: string = 'https://api.keyvalue.xyz/';
  apiKey: string;
  constructor(private http: HttpClient) {}

  public keySet(key: string) {
    this.apiKey = key;
  }

  public getKey(): Observable<Object> {
    return this.http.request('post', this.apiURLNewKey, {
      responseType: 'text'
    });
  }

  public getData(): Observable<Object> {
    return this.http.get(this.apiURL + this.apiKey + '/myKey', {
      responseType: 'json'
    });
  }

  public setData(val: Array<Post>): Observable<Object> {
    return this.http.post(this.apiURL + this.apiKey + '/myKey', val);
  }
}
