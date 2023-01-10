import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from '../../../../sevice/porfolio.service';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit {
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
