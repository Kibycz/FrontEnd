import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '@angular/router';
import { PorfolioService } from '../../../sevice/porfolio.service';
import { iEducacion } from './iEducacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  @Output() onDeleteData: EventEmitter<iEducacion> = new EventEmitter()
  educacionList: iEducacion[] = [];
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educacionList=data.educacion;
    })
  }

  onClick() {
    this.btnClick.emit();
  }

  onDelete(educacion:iEducacion) {
    //console.log(iEducacion);
    if(confirm("¿Esta seguro de eliminar?")){
      this.datosPorfolio.deleteEducacion(educacion).subscribe(
        () => (
          this.educacionList = this.educacionList.filter((i) => {
            return i.id !== educacion.id})
      ));
    }
    console.log(educacion);
  }
  

}
