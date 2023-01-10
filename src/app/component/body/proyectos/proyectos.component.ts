import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { Data } from '@angular/router';
import { PorfolioService } from '../../../sevice/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  @Output() onDeleteData: EventEmitter<Data> = new EventEmitter()
  proyectoList: any;
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
  
  onDelete(data:Data) {
    console.log(data);
  }
}
