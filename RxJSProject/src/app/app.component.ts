import { Component } from '@angular/core';
import { interval, pipe, timer } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

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
    //skipUntil Skipten farkı içerisindeki method aktif olana kadar önceki işlemleri çalışsa dahi yok sayar.
    //aşağıdaki örnekte interval değer üretse dahi timer 5 sn olmadan bu değerleri yok sayar ve zamanı gelince sonraki değerleri işler. 4,5,6.. diye yakalar
    //2. örnek mesela click eventini bağlayalım intervalın değerleri click tuşuna basılmadan değerlendirilmez. Basıldıktan sonra gelen değerleri kullanır.

const myTimer=interval(1000);//her bir sn bir çalışır ve değerleri ise 0,1,2,...

    myTimer.pipe(skipUntil(timer(5000))).subscribe(
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
