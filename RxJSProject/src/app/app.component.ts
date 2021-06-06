import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;
  //ConcatMap->mergeMaptan farkı iç döngü bitince belirtilen gecikme ile yayınlar ardından sonraki döngü bitimini bekler

  constructor() {
    const values = of('a', 'b', 'c', 'd', 'e');
    const nums = of(1, 2);

    values
      .pipe(
        concatMap((val) =>
          nums.pipe(
            delay(1000),
            map((num) => val + num)
          )
        )
      )
      .subscribe(
        //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
        (data) => {
          console.log(data);
          //a1,a2 b1,b2 ... e1,e2 her iç döngü bitince bekleme yapar ve yayınlar
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
