import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;
  constructor() {
    const publisher = range(1, 20); //range  belirtilen başlangıçtan 2 değere kadar değerleri yayar. 1,2...20
    this.subscription = publisher.subscribe(
      //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
      (data) => {
        console.log('gelen deger: ' + data);
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
