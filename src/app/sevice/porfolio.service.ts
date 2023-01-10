import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> {
    return this.http.get('./assets/Data/data.json');
  }

  deleteProyecto(data:Data): Observable<Data>{
    return this.http.delete<Data>('./assets/Data/data.json')
  }
}
