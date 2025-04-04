import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent, RouterLink],
  template: `
    <div class="p-6 flex justify-center flex-col gap-4">
      <h2 class="text-2xl">Shopping Cart</h2>
      @if (item.cart().length > 0) { @for (item of item.cart(); track item.id) {
      <app-cart-item [item]="item" />
      }
      <app-order-summary />
      }@else {
      <div class="flex flex-col justify-center items-center gap-4">
        <h2 class="text-2xl">Your cart is empty</h2>
        <button class="text-xl cursor-pointer" routerLink="/">Voltar</button>
      </div>
      }
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  item = inject(CartService);
}
