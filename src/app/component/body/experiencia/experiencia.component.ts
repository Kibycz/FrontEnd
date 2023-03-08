import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from '../../../sevice/porfolio.service';
import { iExperiencia } from './iExperiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  @Output() addExp: EventEmitter<iExperiencia> = new EventEmitter()
  url: string = "";
  empresa: string = "";
  tarea: string = "";
  periodo: string = "";
  puesto: string = "";

  @Output() onDeleteData: EventEmitter<iExperiencia> = new EventEmitter()
  experienciaList: iExperiencia[] = [];

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(persona =>{
      //console.log(persona);
      this.experienciaList=persona.listaExperiencia;
    })
  }

  
  
  onDelete(experiencia:iExperiencia) {
    if(confirm("¿Esta seguro de eliminar?")){
      this.datosPorfolio.deleteExperiencia(experiencia).subscribe(
        () => (
          this.experienciaList = this.experienciaList.filter((i) => {
            return i.id !== experiencia.id})
      ));
    }
    console.log(experiencia);
  }

  onSubmit(){
    console.log("Llega mal, pero llega");
    if(this.url.length === 0 || this.empresa.length === 0 || this.tarea.length === 0 ||
      this.periodo.length === 0 || this.puesto.length === 0){
      alert("Ingrese contenido en todos los campos");
      return
    }
    const {url, empresa, tarea, periodo, puesto} = this
    const newExperiencia = {url, empresa, tarea, periodo, puesto}
    this.addExp.emit(newExperiencia);
    console.log(newExperiencia)
  }
  
}
