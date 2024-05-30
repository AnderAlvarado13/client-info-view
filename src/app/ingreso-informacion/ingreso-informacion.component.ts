import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ClientService } from '../client.service';

@Component({
  selector: 'app-ingreso-informacion',
  templateUrl: './ingreso-informacion.component.html',
  styleUrls: ['./ingreso-informacion.component.sass']
})
export class IngresoInformacionComponent implements OnInit {
  constructor(private clientService: ClientService) { }
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  botonBuscarHabilitado: string|boolean = false;

  ngOnInit(): void {
    this.botonBuscarHabilitado = false; // Desactivar el botón al cargar la página
  }

  numeroDocumentoValido(): boolean {
    // Lógica de validación del número de documento
    return this.numeroDocumento.length >= 8 && this.numeroDocumento.length <= 11;
  }

  habilitarBotonBuscar(): void {
    this.botonBuscarHabilitado = this.tipoDocumento && this.numeroDocumentoValido();
    console.log(this.botonBuscarHabilitado); // Interacción del botón buscar

  }

  buscar(): void {
    if(this.tipoDocumento === null || this.numeroDocumento === null){
      Swal.fire({
        title: "Datos Incompletos",
        text: "Todos los datos son obligatorios.",
        icon: "question"
      });
    }else{
      this.getClientInfo(this.tipoDocumento, this.numeroDocumento);
    }
  }
  getClientInfo(tipoDocumento: string, numeroDocumento: string): void {
    this.clientService.getClientInfo(tipoDocumento, numeroDocumento)
      .subscribe(
        function (data) {
          console.log('Client Info:', data);
        },
        error => {
          console.error('Error:', error);
        }
      );
  }
}
