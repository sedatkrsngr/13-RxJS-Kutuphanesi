import { Component } from '@angular/core';
import { concat, from, fromEvent, interval, of } from 'rxjs';
import {
  delay,
  delayWhen,
  finalize,
  tap,
  take,
  repeat,
  timeout,
  catchError,
  retry,
  map,
  retryWhen,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  //retryWhen->retryden farkı içerisine observable nesne alır. Her seferinde tekrar eder

  constructor() {
    let myInterval = interval(1000)
      .pipe(
        map((val) => {
          if (val > 6) {
            throw "değer 6'dan büyük";
          } else {
            return val;
          }
        })
      );

      myInterval.pipe(retryWhen(err=>err.pipe(tap(x=>console.log(x))))).subscribe(
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
