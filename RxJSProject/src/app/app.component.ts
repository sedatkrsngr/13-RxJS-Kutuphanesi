import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;
  //SwitchMap->SqitchMaptan farkı her yeni veride önceki veriyi es geçip yeni veriyi işliyor

  constructor() {
    const values = of('a', 'b', 'c', 'd', 'e');
    const nums = of(1, 2);

    values
      .pipe(
        switchMap((val) =>
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
          //e1,e2 çıkan çıktı
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
