import { Component } from '@angular/core';
import { from, pipe } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  constructor() {
    const myArray = from([5, 10, 15, 20, 50, 100, 300, 600]); //içine dizi alan of methodu gibi düşün fromu
    //pipe içerisinde sırasıyla çalışacak absorvable nesneleri barındırır. first ise belirtiğimiz şarta göre ilk nesneyi getirir.
    //eğer şart koymazsak içine o zaman ilk nesneyi getirir
    myArray.pipe(first(val=>val>15)).subscribe(
      //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
      (data) => {
        //data eventin herşeyini gösterir

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
