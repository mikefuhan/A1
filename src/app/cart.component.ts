import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <hr>
    <h3>This is CardCompnent</h3>
    <p>Items are : {{items}}</p>
    <input type="text" [(ngModel)]="newItem">
    <button type="button" (click)="onAddItem()">add item</button>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
  }
)
export class CartComponent{
  @Input() items = [];  // add input decorators to make it bindable from outside of this component scope
  @Output() itemAdded = new EventEmitter<string>(); //@output = for allowing this to be listen-able from outside
  newItem = '';

  onAddItem(){
    this.itemAdded.emit(this.newItem);
  }
}
