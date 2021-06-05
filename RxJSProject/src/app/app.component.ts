import { Component } from '@angular/core';
import { of,defer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;
  constructor() {

    const publisher =defer(()=>of(new Date()));//defer ile tarih işlemleri kullanıldığında. Veriyi aldığımız andaki zamanı bize gösterir
    this.subscription = publisher.subscribe(
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

  stopSubscribe() {//html tarafında butona basarak veri almayı durduruyoruz
    this.subscription.unsubscribe();
  }
}
