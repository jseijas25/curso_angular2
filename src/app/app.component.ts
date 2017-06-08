import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h1>
        {{pageHeader}}
      </h1>
    </div>
    <empleado></empleado>
  `
})

export class AppComponent  {
  pageHeader = 'Empleado';
}
