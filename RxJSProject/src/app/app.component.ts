import { Component } from '@angular/core';
import { concat, from, fromEvent } from 'rxjs';
import { delay, delayWhen, finalize, tap, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  //finalize->pipe içerisinde data çekme işlemi bittikten sonra çalışmasını istediğimiz methodları buraya yazarız. Subscribe 3 methodu bittikten sonra bu method çalışır

  constructor() {
    ajax
      .getJSON<any>('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        finalize(() => console.log('veri alma işleminden bittiden sonra bitti'))
      )
      .subscribe(
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
