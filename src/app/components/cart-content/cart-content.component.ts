import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.scss'],
})
export class CartContentComponent {
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();

  constructor() {
    
  }

}
