import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '@angular/router';
import { PorfolioService } from '../../../sevice/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  @Output() onDeleteData: EventEmitter<Data> = new EventEmitter()
  educacionList: any;
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

  onDelete(data:Data) {
    console.log(data);
    this.onDeleteData.emit(data);
  }

}
