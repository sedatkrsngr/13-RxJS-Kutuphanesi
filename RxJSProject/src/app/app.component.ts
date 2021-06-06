import { Component } from '@angular/core';
import { from, interval, pipe, timer } from 'rxjs';
import { skipUntil, skipWhile, take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  constructor() {
    //pipe içerisinde sırasıyla çalışacak absorvable nesneleri barındırır.
    //takeLast parametre olarak int değer alır ve dizin içerisinde belirtilen son n kadarını alır

    var values = from([1, 2, 3, 4, 5, 6]);

    values.pipe(takeLast(3)).subscribe(
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
