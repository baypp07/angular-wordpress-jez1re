import { Component } from '@angular/core';
import {routerTransition} from './animations';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [routerTransition]
})
export class AppComponent  {

  getOutlet(o) {
    console.log(o)
    return o.activatedRouteData.routeState
  }
}
