import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from '../../../../sevice/porfolio.service';
import { iSoft } from './iSoft';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  habilidadesList: iSoft[] = [];

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.habilidadesList=data.habilidades2;
    })
  }

  onClick() {
    this.btnClick.emit();
  }

  onDelete(soft:iSoft) {
    //console.log(proyecto);
    if(confirm("¿Esta seguro de eliminar?")){
      this.datosPorfolio.deleteSoftSkill(soft).subscribe(
        () => (
          this.habilidadesList = this.habilidadesList.filter((i) => {
            return i.id !== soft.id})
      ));
    }
    console.log(soft);
  }

}
