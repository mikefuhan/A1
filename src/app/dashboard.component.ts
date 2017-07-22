import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>foobar is {{ loadState }}</p>
    <button type="button" (click)="onUserClick()">click me</button>
    <br>
    <p>you can change the loadState here also</p>
    <input type="text" [(ngModel)]="loadState">
  `
})
export class DashboardComponent{
  loadState = 'loading...';

  onUserClick(event){
    this.loadState = "finished.";
  }

  onUserInput(event){
    this.loadState = event.target.value;
  }
}
