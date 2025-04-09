import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { QuantityInputComponent } from '../../../components/quantity-input/quantity-input.component';

@Component({
  selector: 'app-product-card-button',
  imports: [PrimaryButtonComponent, QuantityInputComponent],
  template: `
    @if(productInCart() === null){
    <app-primary-button
      label="Add to Cart"
      class="mt-3"
      (buttonClick)="cartService.addToCart(product())"
      [isDisabled]="product().stock === 0"
    />
    }@else if(productInCart() !== null && product().stock > 0){
    <app-quantity-input
      (handleIncrement)="cartService.incrementItem(product())"
      (handleDecrement)="cartService.decrementItem(product())"
      [qtd]="productInCart()?.qtd ?? 0"
      [limitValue]="product().stock"
    />
    }
  `,
  styles: ``,
})
export class ProductCardButtonComponent {
  cartService = inject(CartService);
  product = input.required<Product>({});

  readonly productInCart = computed(() =>
    this.cartService.findProductInCart(this.product().id)
  );
}
