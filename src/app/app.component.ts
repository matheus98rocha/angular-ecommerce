import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header />
    <div class="container mx-auto">
      <router-outlet />
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecomm';
}
