import { Component } from '@angular/core';
import {
  concat,
  from,
  fromEvent,
  interval,
  observable,
  Observable,
  of,
  Subject,
} from 'rxjs';
import {
  delay,
  delayWhen,
  finalize,
  tap,
  take,
  repeat,
  timeout,
  catchError,
  retry,
  map,
  retryWhen,
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

  //subject->observable nesnelerinin özelleştirilmiş tipidir. Observable nesnelerinin yetersiz kaldığı yerde devreye girerler
  //İçinde çalıştırdığımız method tüm subscribler için ortaktır. Yani diyelim ki rastgele bir sayı üretiyor. Bunu 10 tane sub
  //dinliyorsa hepsi aynı veriyi görür ama new observable deseydik her seferinde farklı veri görecektik
  //Mutlaka next methodundan önce subscribe olması gerekiyor
  constructor() {

    const myObservable = new Observable(x=>{
      x.next(Math.random());
    });

    const myObservableSub = new Subject();



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
    myObservableSub.next(Math.random());
  }
}
