import { Component } from '@angular/core';
import { from, pipe } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;

  constructor() {
    //pipe içerisinde sırasıyla çalışacak absorvable nesneleri barındırır.

    var nums = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//skip belirtilen ilk n değeri yok sayar yani sonucumuz ilk 4 değeri es geçersek 5,6,7..10
    nums.pipe(skip(4)).subscribe(
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
