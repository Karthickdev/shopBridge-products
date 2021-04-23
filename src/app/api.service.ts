import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'Your API base Url';

  products:any;
  err:any;
  items: string = '/itemLists';
  edit: string = '/editItem';
  add: string = '/addItem';
  delete: string ='/removeItem';

  constructor(private http: HttpClient) { }

  // ajaxCallService(dataUrl:any, dataType:any, dataParam:any) {
  //   let headers = new HttpHeaders();
  //   headers.append('Access-Control-Allow-Methods', 'POST, GET ,OPTIONS');
  //   headers.append('Access-Control-Allow-Headers', 'application/json');
  //   headers.append('Content-Type', 'application/json');
  //   switch (dataType) {
  //     case 'get': return new Promise(resolve => {  //get return type	
  //       this.http.get(dataUrl)
  //         .subscribe(data => {
  //           this.products = data;
  //           resolve(this.products);
  //         }, (err) => {
  //           this.err = err.error;
  //           resolve(this.err);
  //         });
  //     });
  //     case 'post': return new Promise(resolve => {	//post return type
  //       // this.presentLoading();

  //       this.http.post(dataUrl, dataParam, { headers: headers })
  //         .subscribe(data => {
  //           this.products = data;
  //           resolve(this.products);
  //         }, (err) => {
  //           if (err) {
  //             resolve(this.err);
  //           }
  //         });
  //     });
  //   }
  // }
}
