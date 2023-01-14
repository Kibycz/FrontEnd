import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from '../../../../sevice/porfolio.service';
import { iHard } from './iHard';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  habilidadesList: iHard[] = [];

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

  onDelete(hard:iHard) {
    //console.log(proyecto);
    if(confirm("¿Esta seguro de eliminar?")){
      this.datosPorfolio.deleteHardSkill(hard).subscribe(
        () => (
          this.habilidadesList = this.habilidadesList.filter((i) => {
            return i.id !== hard.id})
      ));
    }
    console.log(hard);
  }

}
