import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';

  constructor() {
    const publisher = interval(1000); //interval vermiş olduğumuz  sürede bir çalışır

    publisher.subscribe(
      //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
      (data) => {
        console.log('sedat ' + data);//data her 1 sn de b,r değişecek ve 0,1,2... sonsuza kadar devam eder 1s aralıklarla unscribe olana kadar
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
