import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'RxJSProject';

  @ViewChild('btn') button!: ElementRef; //bu ikili ile btn elementini button değişkenine atar ardından işlem yapabiliriz.

  constructor() {}
  ngAfterViewInit(): void {//Htmller oluştuktan sonra çalışacak method(oluşturduğumuz btn bu şekilde ulaşırız)

    fromEvent(this.button.nativeElement, 'click').subscribe( //subscribe ile 3 fonk çalışır. aldığımız data fonk ,hata fonk ve veri alma işlemi bitince çalışcak fonk
      (data) => {     //data eventin herşeyini gösterir

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
