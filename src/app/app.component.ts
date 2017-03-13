import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  range: string = '10';
    onChange(event, par): void {
        console.log(event, par);
    }
    countPiople: number = 5;
    minus(): void {
        this.countPiople = (this.countPiople > 1) ? this.countPiople - 1 : 1;
        console.log(this.countPiople);
    }
    plus(): void {
        this.countPiople++ ;
    }

}
