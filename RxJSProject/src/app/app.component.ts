import { Component } from '@angular/core';
import { from } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;
  //MapTo->gelen dataları yayınlamaz sadece verdiği değeri yayınlar
  //Aşağıdaki örnekte sabitdeğer değerini yayınlar sadece

  constructor() {
    const values = from([1, 2, 3, 4, 5, 6]);
    values.pipe(mapTo("sabitdeğer")).subscribe(
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
