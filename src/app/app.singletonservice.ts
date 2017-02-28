import {Injectable} from '@angular/core';
import {Task} from './task';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable"
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()

export class AppSingletonService {

  tasks: Task[] = [{
    _id: '00ghhd88',
    date: '19/02/1993',
    title: 'first',
    description: 'first task',
    priority: 'high'
  }];

  constructor(private http: Http) {

  }

  delete(id: string) {
    let jsonHeader = new Headers({
      'Content-type' : 'application/json'
    });
    return this.http.get('http://localhost:9000/remove/'+id, {headers: jsonHeader}).map(data => {
      return this.extractData(data)}).catch(e => this.handleError(e));
  }

  addTask(t: Task): Observable<any> {
    let jsonHeader = new Headers({
      'Content-type' : 'application/json'
    });
    let obj = {
      id: t._id,
      date: t.date,
      title: t.title,
      description: t.description,
      priority: t.priority
    };
    return this.http.post('http://localhost:9000/add', obj, {headers: jsonHeader}).map(data => {
      return this.extractData(data)}).catch(e => this.handleError(e));
  }

  updateTask(t: Task): Observable<any> {
    let jsonHeader = new Headers({
      'Content-type' : 'application/json'
    });
    let obj = {
      _id: t._id,
      date: t.date,
      title: t.title,
      description: t.description,
      priority: t.priority
    };
    return this.http.post('http://localhost:9000/update', obj, {headers: jsonHeader}).map(data => {
      return this.extractData(data)}).catch(e => this.handleError(e));
  }

  extractData(res: any) {
    let body = res.json();
    return body;
  }

  showTask(): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type' : 'application/json'
    });
    return this.http.get('http://localhost:9000/get/all',
      {headers: jsonHeader}).map(data => {
      return this.extractData(data)}).catch(e => this.handleError(e));
  }

  private handleError(error:any) {
    let errMsg: string;
    try {
      if (JSON.parse(error._body).message) {
        errMsg = JSON.parse(error._body).message;
      }
      else {
        errMsg = 'Something went wrong. Please try again later.';
      }
    }
    catch(e) {
      errMsg = 'Something went wrong. Please try again later.'
    }
    return Observable.throw(new Error(errMsg));
  }

}
