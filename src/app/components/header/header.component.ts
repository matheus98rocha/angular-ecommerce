import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div
      class="bg-slate-100
      px-4
      py-3
      shadow-md
      flex
      justify-between
      items-center
      w-full"
    >
      <button class="text-xl cursor-pointer" routerLink="/">My Store</button>
      <app-primary-button
        [label]="cartLabel()"
        (buttonClick)="handleClickButton()"
        routerLink="/cart"
      />
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  cartService = inject(CartService);

  cartLabel(): string {
    const count = this.cartService.cart().length;

    return count > 0 ? `Cart(${count || ''})` : 'Cart';
  }

  handleClickButton() {
    console.log('Daaleee');
  }
}
