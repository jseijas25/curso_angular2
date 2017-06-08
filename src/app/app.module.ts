
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , EmpleadoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
