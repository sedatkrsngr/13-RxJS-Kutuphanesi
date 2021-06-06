import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import {  } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  //forkJoin->içerisindeki observablelerin hepsinin birden yayınlamaları bitince hepsinin tüm değerlerini kendisi yayınlıyor

  constructor() {

forkJoin({
ilkistek: ajax.getJSON<any>("https://jsonplaceholder.typicode.com/todos/1"),
ikinciistek:ajax.getJSON<any>("https://jsonplaceholder.typicode.com/posts/1")
}).subscribe(
      //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
      (data) => {
        console.log(data);

      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('veri alma işlemi bitti');
      }
    );
  }
}
