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

  constructor() { }

  ngOnInit(): void {
    
  }

  onClick() {
    this.btnClick.emit();
  }

  
}
