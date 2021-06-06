import { Component } from '@angular/core';
import { from, pipe } from 'rxjs';
import { find, first,filter } from 'rxjs/operators';

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

    //pipe içerisinde sırasıyla çalışacak absorvable nesneleri barındırır. Filter ise belirtiğimiz şarta göre ilk nesneleri getirir.
    //Filterin -> first ve findden farkı-> Geriye birden fazla değer döner.
    //Ayrıca şartları sağlamayan veri yoksa hata fırlatmaz
    myArray.pipe(filter((val) => val > 800)).subscribe(
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
