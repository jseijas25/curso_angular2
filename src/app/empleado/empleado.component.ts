import {Component} from '@angular/core';

@Component ({
  selector: 'empleado',
  templateUrl: 'app/empleado/empleado.component.html'

})

export class EmpleadoComponent {
  nombre: string = 'Jose Luis';
  apellido: string = 'Seijas';
  genero: string = 'Masculino';
  edad: number = 23;
}
