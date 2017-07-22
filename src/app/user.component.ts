import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <p>Start typing something in the text box</p>
      <input type="text" (input)="onUserInput($event)" [value]="name">
      <p>This is {{name}} from User Component</p>
      <hr>
    </div>
  `,

})
export class UserComponent {
  name = 'nobody';

  onUserInput(event) {
    this.name = event.target.value;
  }
}
