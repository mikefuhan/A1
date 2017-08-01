import { Component } from '@angular/core';
import { random } from 'lodash';

// declare var _: any; // not using this way cos we will use the typescript translation

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'another quite reactive webapp';
  rootProp = 'Initial value';  //this will pass into the app-dash (dashboardcomponent)
  rootItems = ['initial value from app component','apples','bananas','cherries'];
  number = 0;

  onPropChanged(newProp){
    this.rootProp = newProp;
  }

  onItemWasAdded(newItem){
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

  onIncrease(){
    // this.number = this.number * 2;
    this.number = random(1,10);
  }
}
