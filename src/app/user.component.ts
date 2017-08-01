import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <h3>This is UserComponent</h3>
      <p>Start typing
      <input type="text" (input)="onUserInput($event)" [value]="name"></p>
      <p>textbox content is {{name}}</p>
      <hr>
      <app-user-detail></app-user-detail>
      <hr>
    </div>
  `,

})
export class UserComponent {
  name = 'original text';

  onUserInput(event) {
    this.name = event.target.value;
  }
}
