import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { QuantityInputComponent } from '../../../components/quantity-input/quantity-input.component';

@Component({
  selector: 'app-product-card-button',
  imports: [PrimaryButtonComponent, QuantityInputComponent],
  template: `
    @if(cartService.findProductInCart(product().id) === null){
    <app-primary-button
      [label]="addButtonCartLabel(product().id)"
      class="mt-3"
      (buttonClick)="cartService.addToCart(product())"
      [isDisabled]="product().stock === 0"
    />
    }@else if(cartService.findProductInCart(product().id) !== null &&
    product().stock > 0){
    <app-quantity-input
      (handleIncrement)="cartService.incrementItem(product())"
      (handleDecrement)="cartService.decrementItem(product())"
      [qtd]="cartService.findProductInCart(product().id)?.qtd || 0"
      [limitValue]="product().stock"
    />
    }
  `,
  styles: ``,
})
export class ProductCardButtonComponent {
  cartService = inject(CartService);
  product = input.required<Product>({});

  addButtonCartLabel(productId: number): string {
    const findedCartItem = this.cartService
      .cart()
      .find((item) => item.id === productId);

    return findedCartItem && findedCartItem?.qtd > 0
      ? `Add more (${findedCartItem?.qtd})`
      : 'Add to Cart';
  }
}
