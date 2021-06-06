import { Component } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, skip, switchMap, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;


  constructor() {
  //ToArray->gelen veriyi  arraya çevirir
    const values = interval(1000)

      values.pipe(skip(3),take(5),toArray()).subscribe(
        //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
        (data) => {
          console.log(data);
          //[4,5,6,7,8] değerli dizi oluşturur
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
