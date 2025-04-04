import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class="bg-white shadow-md hover:shadow-lg rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
      </div>

      <div class="flex flex-col">
        <span class="text-md font-bold text-center">{{ product().title }}</span>
        <span class="text-sm text-center">{{ '$' + product().price }}</span>
        <app-primary-button
          [label]="addButtonCartLabel(product().id)"
          class="mt-3"
          (buttonClick)="cartService.addToCart(product())"
        />
      </div>

      <span
        class="absolute top-2 right-3 text-sm font-bold"
        [class]="product().stock ? 'text-green-500' : 'text-red-500'"
      >
        @if(product().stock){
        {{ product().stock }} left } @else { Out of stock }
      </span>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  cartService = inject(CartService);

  addButtonCartLabel(productId: number): string {
    const findedCartItem = this.cartService
      .cart()
      .find((item) => item.id === productId);

    return findedCartItem && findedCartItem?.qtd > 0
      ? `Add more (${findedCartItem?.qtd})`
      : 'Add to Cart';
  }

  product = input.required<Product>({});
}
