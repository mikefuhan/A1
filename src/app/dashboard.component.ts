import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h3>This is DashboardComponent</h3>
    <p>The load state is now {{ loadState }}</p>
    <button type="button" (click)="onUserClick()">change the state (on above message and below texbox) to finished </button>
    <br>
    <p>you can change the loadState here also (2-way binding using ngModel)</p>
    <input type="text" [(ngModel)]="loadState">
    <p>these controls are on event binding</p>

    <!-- *************************************************** -->
    <p>value for propInDC is {{propInDC}}</p>
    <p>Type something in below text box
    <input type="text" (input)="onUserInput2($event)" [value]="propInDC">
    </p>
    <!-- *************************************************** -->

  `
})
export class DashboardComponent{
  loadState = 'loading...';

  // use @Input decorator to bind this property from outside
  @Input() propInDC = 'i am sitting inside';
  // create a new class of eventEmitter which will emit an event with a string value
  @Output() propChanged = new EventEmitter<string>();

  onUserClick(event){
    this.loadState = "finished";
  }

  //------------------------------------
  onUserInput2(event){
    this.propChanged.emit(event.target.value);
  }
  //------------------------------------
}
