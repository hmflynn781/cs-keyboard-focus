import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  actionOption: any = {
    headername: 'Home',
    btnright: true,
    displayLogo: true,
    buttonRight: {
      name: '',
      link: 'notification'
    }
  };
}
