import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  private updateItemQuantity(productId: number, change: number) {
    const currentCart = this.cart();

    // Find the produto in the cart and update its quantity
    const updatedCart = currentCart
      .map((item) => {
        if (item.id === productId) {
          const newQtd = item.qtd + change;

          return newQtd > 0 ? { ...item, qtd: newQtd } : null;
        }
        return item;
      })
      // Removing null items from the cart
      .filter((item): item is Product => item !== null);

    this.cart.set(updatedCart);
  }

  addToCart(product: Product) {
    if (!product || typeof product.id === 'undefined') return;

    const currentCart = this.cart();

    const productExists = currentCart.some((item) => item.id === product.id);

    const newCart = productExists
      ? currentCart.map((item) =>
          item.id === product.id ? { ...item, qtd: item.qtd + 1 } : { ...item }
        )
      : [...currentCart, { ...product, qtd: 1 }];

    this.cart.set(newCart);
  }

  incrementItem(product: Product) {
    this.updateItemQuantity(product.id, 1);
  }

  decrementItem(product: Product) {
    this.updateItemQuantity(product.id, -1);
  }

  // Mudar isso para remover um item em produtos com mais de um item
  removeFromCart(product: Product) {
    this.cart.set(this.cart().filter((p) => p.id !== product.id));
  }
  constructor() {}
}
