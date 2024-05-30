import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-pantalla-resumen',
  templateUrl: './pantalla-resumen.component.html',
  styleUrls: ['./pantalla-resumen.component.sass']
})
export class PantallaResumenComponent implements OnInit {
  primerNombre: string = '';
  segundoNombre: string = '';
  primerApellido: string = '';
  segundoApellido: string = '';
  telefono: string = '';
  direccion: string = '';
  ciudadResidencia: string = '';
  infoVista : boolean = true;

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    if(this.clientService.info == undefined || this.clientService.info.length === 0 || this.clientService.info == null){
      this.router.navigate(['/']);
    }else{
      this.primerNombre = this.clientService.info['primerNombre'];
      this.segundoNombre = this.clientService.info['segundoNombre'];
      this.primerApellido = this.clientService.info['primerApellido'];
      this.segundoApellido = this.clientService.info['segundoApellido'];
      this.telefono = this.clientService.info['telefono'];
      this.direccion = this.clientService.info['direccion'];
      this.ciudadResidencia = this.clientService.info['ciudad'];
    }
  }

  volver(){
    this.router.navigate(['/']);
  }
}
