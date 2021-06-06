import { Component } from '@angular/core';
import { from, fromEvent, interval, merge, of } from 'rxjs';
import {} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  //merge->içerisine aldığı absorvable datalarını birleştirir
  constructor() {
    const myArray = from([1,2,3]);
    const myNum = of(15);
    merge(myArray,myNum).subscribe(
      //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
      (data) => {
        console.log(data);
        //1,2,3,15
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
