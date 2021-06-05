import { Component } from '@angular/core';
import { range,from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;
  constructor() {
    const map = new Map();//c# ta bulunan dictionary ile aynı key,value
    map.set(1,"Kitaplar");
    map.set(2,"Kalemler");
    const publisher = from(map) //of operatorundan farkı içine dizi alır ve absorvable nesnesine dönüştürür
    this.subscription = publisher.subscribe(
      //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
      (data) => {
        console.log(`${data[0]}=${data[1]}`);

      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('veri alma işlemi bitti');
      }
    );
  }

  stopSubscribe() {//html tarafında butona basarak veri almayı durduruyoruz
    this.subscription.unsubscribe();
  }
}
