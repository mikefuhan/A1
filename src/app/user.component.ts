import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)">
    <p>This is {{name}} from User Component</p>
    <p>Hello this is Monday from User Component</p>
    <hr>
  `,

})
export class UserComponent{
  name = 'Mike';

  onUserInput(event){
    this.name=event.target.value;
  }
}
