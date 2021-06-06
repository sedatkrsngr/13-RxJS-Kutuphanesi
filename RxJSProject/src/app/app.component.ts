import { Component } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;
  //Map>gelen datalar üzerinde işlem yapmak için kullanılan methodtur.
  //Yani hangi datayı işler ve belirttiği dataları yayınlar
  //Mesela apiden sadece ad alanı gösterilsin desek dahi onu da burada hallederiz

  constructor() {
    const values = from([1, 2, 3, 4, 5, 6]);
    values.pipe(map(val=>val+10)).subscribe(
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
