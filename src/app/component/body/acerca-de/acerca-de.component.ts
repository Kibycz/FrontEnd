import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from '../../../sevice/porfolio.service';
import { iAcercaDe } from './iAcercaDe';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  acercaDe: any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(persona =>{
      //console.log('Datos acerca-de de persona' + persona);
      this.acercaDe=persona;
    })
  }

  /*onclick() {
    this.btnClick.emit();
  }*/

}
