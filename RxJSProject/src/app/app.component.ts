import { Component } from '@angular/core';
import {
  AsyncSubject, BehaviorSubject, ReplaySubject,
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

  //replaysubject->subscribe olanlara son yayınlanmış olan n kadar dataları gönderir
  constructor() {

    const myObservableSub = new ReplaySubject(3);


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
