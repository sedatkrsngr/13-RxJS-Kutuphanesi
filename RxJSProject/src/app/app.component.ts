import { Component } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, reduce, skip, switchMap, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;


  constructor() {
  //raduce->gelen verileri işler ve tek bir sonuç döner
  //aşağıdaki örn olduğu gibi 2 parametre ile oluşur acc başlangıçta etkisiz elemandır. Yaptığımız işleme göre sonraki veri geldiğinde değişir.
  //acc işlemin sonucu yeni değeri olur. Yani aslında aşağıda dizinin elemanlarını topluyoruz
    const values = of(1,2,3,4,5);

      values.pipe(reduce((acc,val)=>acc+val)).subscribe(
        //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
        (data) => {
          console.log(data);
          //15
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
