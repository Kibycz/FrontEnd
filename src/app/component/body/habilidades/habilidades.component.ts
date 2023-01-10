import { Component, OnInit, setTestabilityGetter, Output, EventEmitter } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  habilidadesList: any;

  constructor(/*private datosPorfolio: PorfolioService*/) { }

  ngOnInit(): void {
    /*this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.habilidadesList=data.habilidades;
    })*/
  }

  onClick() {
    this.btnClick.emit();
  }

  
}
