import { Component } from '@angular/core';
import { from, interval, pipe, timer } from 'rxjs';
import { skipUntil, skipWhile } from 'rxjs/operators';

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
    //skipwhile belirtilen şartı sağlayanları atlayacak. Aşağıdaki 5,6 sonucu verir

    var values = from([1, 2, 3, 4, 5, 6]);

    values.pipe(skipWhile(x=>x<5)).subscribe(
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
