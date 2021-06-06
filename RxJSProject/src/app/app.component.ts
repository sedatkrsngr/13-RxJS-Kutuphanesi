import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;
  //MergeMap->maptan farkı geriye sabit bir değer değil de absorvable değer döner
  //Absorvable değer döndüğü için döndüğü değerlere de subscribe olabiliyoruz ve iç içe subscribelerden daha efektif yazmış oluruz

  constructor() {
    const values = of('a', 'b', 'c', 'd', 'e');
    const nums = of(1, 2);

    values
      .pipe(
        mergeMap((val) =>
          nums.pipe(
            delay(3000),
            map((num) => val + num)
          )
        )
      )
      .subscribe(
        //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
        (data) => {
          console.log(data);
          //a1,a2,b1,b2.....e1,e2 çıkan çıktı
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
