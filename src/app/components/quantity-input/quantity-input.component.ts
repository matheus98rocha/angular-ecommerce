import { Component, input, Input, output } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  imports: [],
  template: `
    <div
      class="border border-slate-500 flex justify-center items-center rounded-lg overflow-hidden gap-2"
    >
      <button
        (click)="handleDecrement.emit()"
        class="rounded-l-lg px-4 py-2 text-slate-500 hover:bg-slate-200"
      >
        -
      </button>
      <p>{{ qtd() }}</p>
      <button
        (click)="handleIncrement.emit()"
        class="rounded-r-lg px-4 py-2 text-slate-500 hover:bg-slate-200"
      >
        +
      </button>
    </div>
  `,
  styles: ``,
})
export class QuantityInputComponent {
  qtd = input.required<number>();

  handleIncrement = output();
  handleDecrement = output();
}
