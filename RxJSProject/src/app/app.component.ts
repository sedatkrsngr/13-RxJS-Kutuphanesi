import { Component } from '@angular/core';
import { concat, from, fromEvent, of } from 'rxjs';
import { delay, delayWhen, finalize, tap, take, repeat, timeout, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  //timeOut->belirtilen sürede data gelirse hata fırlatmaz. Hata fırlatırsa catchError ile yakalarız

  constructor() {
   const myAjax = ajax
      .getJSON<any>('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        delay(4000)
      );

      myAjax.pipe(timeout(3000),catchError(err=>of("3 sn de data gelmedi"))).subscribe(
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
