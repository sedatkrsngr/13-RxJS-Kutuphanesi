import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';
  subscription: any;
  constructor() {
    const publisher = timer(1000, 2000); //interval gibi aslında bağlandıktan 1 sn sonra çalış ve her 2 sn de bir çalışmaya devam et demek
    //2.kullanımı ise timer(1000); //timer subscribe olduktan sonra vermiş olduğumuz süre sonra 1 kere  çalış demek ve ardından tamamlanır
    this.subscription = publisher.subscribe(
      //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
      (data) => {
        console.log('sedat ' + data); //data her 1 sn de b,r değişecek ve 0,1,2... sonsuza kadar devam eder 1s aralıklarla unscribe olana kadar
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
