import { Component } from '@angular/core';
import { concat, from, fromEvent } from 'rxjs';
import { delay, delayWhen, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  //delayWhen->Belirtilen fonksiyon çalışana kadar bekle demek
  //Aşağıdaki örnekte ekranın herhangi bir yerine tıklayana kadar veri dinleme işi gerçekleşmez

  constructor() {
    ajax.getJSON<any>('https://jsonplaceholder.typicode.com/todos/1').pipe(delayWhen(val=>fromEvent(document,"click"))).subscribe(
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
