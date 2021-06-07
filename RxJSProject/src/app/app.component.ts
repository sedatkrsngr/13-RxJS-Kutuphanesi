import { Component } from '@angular/core';
import {
  AsyncSubject,
} from 'rxjs';
import {
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  //asyncsubject->subscribe olan yapılara en son yayınlanmış olan datayı gönderir.
  //önemlik olan şu mutlaka complete methodu çalışmış olmalı
  //aşağıdaki örn. complete 2. DEğer yazanda çalıştığı için 2 si de 2.değer yazısını görür
  constructor() {

    const myObservableSub = new AsyncSubject();

    myObservableSub.next("1. Değer");

    myObservableSub.subscribe(
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

    myObservableSub.next("2. Değer");
    myObservableSub.complete();
    myObservableSub.subscribe(
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
