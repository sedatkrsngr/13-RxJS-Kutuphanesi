import { Component } from '@angular/core';
import { from, fromEvent, interval, merge, of } from 'rxjs';
import { mergeAll, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  //startWith->arrayin ilk indexine data koymak için kullanılır

  constructor() {
    const myArray = from([1,2,3]);

    myArray.pipe(startWith(4,5,6)).subscribe(
      //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
      (data) => {
        console.log(data);
        //4,5,6,1,2,3
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
