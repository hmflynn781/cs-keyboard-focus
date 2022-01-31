import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public value: string;
  constructor() {}

  changed(val: string) {
    console.log(val);
  }

}
