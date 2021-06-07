import { Component } from '@angular/core';
import { concat, from } from 'rxjs';
import { delay,tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  //tab->akışı bozmadan dataları kullanma. Örn:Log atma

  constructor() {
    const values = from([1,2,3,4]);

    values.pipe(tap(val=>console.log(val))).subscribe(
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
