import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJSProject';

  constructor() {
    const values = of('sedat', 27, [1, 2, 3]); //of vermiş olduğumuz değerleri subscribe olunabilecek observable türüne dönüştürür
    values.subscribe((data) => {
      console.log(data);
    });
  }
}
