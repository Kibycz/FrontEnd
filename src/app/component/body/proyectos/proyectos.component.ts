import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { Data } from '@angular/router';
import { PorfolioService } from '../../../sevice/porfolio.service';
import { proyecto } from './proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  //@Input() proyecto:proyecto = Data[0];
  @Output() btnClick = new EventEmitter()
  @Output() onDeleteData: EventEmitter<proyecto> = new EventEmitter()
  proyectoList: proyecto[] = [];
  constructor( private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.proyectoList=data.proyectos;
    })
  }

  onClick() {
    this.btnClick.emit();
  }
  
  onDelete(proyecto:proyecto) {
    //console.log(proyecto);
    if(confirm("¿Esta seguro de eliminar?")){
      this.datosPorfolio.deleteProyecto(proyecto).subscribe(
        () => (
          this.proyectoList = this.proyectoList.filter((i) => {
            return i.id !== proyecto.id})
      ));
    }
    console.log(proyecto);
  }
}
