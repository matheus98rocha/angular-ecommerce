import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';
import { QuantityInputComponent } from '../../../components/quantity-input/quantity-input.component';

@Component({
  selector: 'app-cart-item',
  imports: [PrimaryButtonComponent, QuantityInputComponent],
  template: `
    <div
      class="bg-white shadow-md rounded-xl p-6 flex justify-between flex-col lg:flex-row gap-4 items-center"
    >
      <div class="flex gap-4 items-center">
        <img [src]="item().image" class="w-[50px] h-[50px] object-contain" />
        <div class="flex flex-col">
          <span class="text-md font-bold">{{ item().title }}</span>
          <span class="text-sm"> {{ '$' + item().price }}</span>
        </div>
      </div>
      <div class="flex gap-4 items-center">
        <app-quantity-input
          (handleIncrement)="cartService.incrementItem(item())"
          (handleDecrement)="cartService.decrementItem(item())"
          [qtd]="item().qtd"
          [limitValue]="item().stock"
        />
        <app-primary-button
          label="Remove"
          (buttonClick)="cartService.removeFromCart(item())"
        />
      </div>
    </div>
  `,
  styles: ``,
})
export class CartItemComponent {
  item = input.required<Product>({});

  cartService = inject(CartService);
}
