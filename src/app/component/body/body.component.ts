import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { PorfolioService } from '../../sevice/porfolio.service';
import { proyecto } from './proyectos/proyecto';
import { iEducacion } from './educacion/iEducacion';
import { iExperiencia } from './experiencia/iExperiencia';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  //@Input() proyecto:proyecto = new Data[];
  data: Data[] = [];
  proyectoList: proyecto[] = [];
  educacionList: iEducacion[] = [];
  experienciaList: iExperiencia[] = [];
  

  constructor( private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data)=>(
      this.proyectoList = data.proyectos
  ));
  }

  editAcercaDe() {
    console.log("Acerca de mí!");
  }

  editEducacion() {
    console.log("Educación");
  }

  agregarExperiencia(experiencia:iExperiencia) {
    console.log("Experiencia");
    this.datosPorfolio.agregarExperiencia(experiencia).subscribe((experiencia)=>(this.experienciaList.push(experiencia)))
  }

  editHabilidades() {
    console.log("Habilidades");
  }

  editProyectos() {
    console.log("Proyectos")
  }

  deleteProyecto(proyecto:proyecto){
    /* if(confirm("¿Esta seguro de eliminar?")){
      this.datosPorfolio.deleteProyecto(proyecto).subscribe(
        () => (
          this.proyectoList = this.proyectoList.filter((i) => {
            return i.id !== proyecto.id})
      ));
    } */
    console.log(proyecto);
  }

  deleteExperiencia(data:Data) {
    console.log(data);
  }

  deleteEducacion(iEducacion:any) {
    console.log(iEducacion);
    if(confirm("¿Esta seguro de eliminar?")){}
  }

}
