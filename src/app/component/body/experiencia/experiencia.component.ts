import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '@angular/router';
import { PorfolioService } from '../../../sevice/porfolio.service';
import { iExperiencia } from './iExperiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  @Output() onDeleteData: EventEmitter<Data> = new EventEmitter()
  experienciaList: iExperiencia[] = [];
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.experienciaList=data.experiencia;
    })
  }

  onClick() {
    this.btnClick.emit();
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
  
}
