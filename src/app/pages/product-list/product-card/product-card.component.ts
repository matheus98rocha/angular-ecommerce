import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';
import { QuantityInputComponent } from '../../../components/quantity-input/quantity-input.component';
import { ProductCardButtonComponent } from '../product-card-button/product-card-button.component';

@Component({
  selector: 'app-product-card',
  imports: [ProductCardButtonComponent],
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

        <app-product-card-button [product]="product()" />

        <span
          class="absolute top-2 right-3 text-sm font-bold"
          [class]="product().stock ? 'text-green-500' : 'text-red-500'"
        >
          @if(product().stock){
          {{ product().stock }} left } @else { Out of stock }
        </span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  cartService = inject(CartService);

  product = input.required<Product>({});
}
