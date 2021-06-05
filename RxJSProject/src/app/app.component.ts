import { Component } from '@angular/core';
import { of,defer, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;
  constructor() {
    const myObservable=new Observable(o=>{//Yeni bir obsarvable nesnesi üretiyoruz ve sırasıyla alınacak değerleri veriyoruz
      o.next("sedat");
      o.next("karasungur");
      o.complete();
    });
     this.subscription = myObservable.subscribe(
      //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
      (data) => {
        console.table(data);

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
