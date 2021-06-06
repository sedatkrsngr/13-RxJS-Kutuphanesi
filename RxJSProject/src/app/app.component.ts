import { Component } from '@angular/core';
import { from, interval, pipe, timer } from 'rxjs';
import { throttle, throttleTime } from 'rxjs/operators';

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
   const myInterval = interval(1000);

    //throttleTime içerisindeki süreye  çalıştığı andaki datayı alır. Yani ilk 0,3,6,9..... Throttle(methodlar alır) den farkı sadece süre alır
    myInterval.pipe(throttleTime(2000)).subscribe(
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
