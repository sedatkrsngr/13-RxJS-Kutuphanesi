import { Component } from '@angular/core';
import {
  AsyncSubject, BehaviorSubject,
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

  //behaviorsubject->ilk oluşturulduğu anda mutlaka ilk değeri alır
  //önce subs sonra subs farketmez hepsine sonraki dataya kadar dataları yayar
  constructor() {

    const myObservableSub = new BehaviorSubject("Başlangıç Değer");


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
