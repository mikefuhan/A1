import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <hr>
    <h3>This is CardCompnent</h3>
    <p>Items are : {{items}}</p>
    <input type="text" [(ngModel)]="items">
    <button type="button" (click)="onAddItem()">add to array</button>

  `,
  }
)
export class CartComponent{
  @Input() items = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  onAddItem(){
    this.itemAdded.emit(this.newItem);
  }
}
