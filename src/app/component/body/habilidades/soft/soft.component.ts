import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from '../../../../sevice/porfolio.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  habilidadesList: any;

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.habilidadesList=data.habilidades;
    })
  }

  onClick() {
    this.btnClick.emit();
  }


}
