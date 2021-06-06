import { Component } from '@angular/core';
import { concat, from } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  //concat->observable değerler alır. Observable yayınlamaları sırasıyla yapar. Biri bitmeden diğerini yayınlamaz

  constructor() {
    const values = from([1,2,3,4]);
    const values2 = from([5,6,7,8]);
    const values3 = from([9,10,11,12]);

    concat(values,values2,values3).subscribe(
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
