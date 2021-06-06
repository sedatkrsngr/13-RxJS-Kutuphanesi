import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent, pipe } from 'rxjs';
import { distinct, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'RxJSProject';
  subscription: any;

  @ViewChild('textSearch') //Viewchild HTml tarafındaki değerleri typescript tarafında yakalamaya yarar ve aşağıdakiyle ikilidir.
  textSerch!: ElementRef;

  constructor() {
    //pipe içerisinde sırasıyla çalışacak absorvable nesneleri barındırır.
  }
  ngAfterViewInit(): void {//Html çalıştıktan sonra çalışır.Böylece #degerlerine ulaşabiliriz

    //From event ise eventimizde yapacağımız işlemleri belirtir. Mesela aşaıda texte değer girildiği anda çalışacak
    //Değer girildiğinde her bastığımızda işlem yapmasın belli bir süre bastıklarımızı toplu olarak işleme dahil etsin
    //istiyorsak o zaman debounceTime kullanırız. Mesela aşağıda 300 ms içinde yazılanları işleme sokar. Arama işlemlerinde kullanılabilir
    fromEvent<KeyboardEvent>(this.textSerch.nativeElement, 'keyup').pipe(debounceTime(300)).subscribe(
      //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
      (data) => {
        console.log((data.target as HTMLInputElement).value);
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
