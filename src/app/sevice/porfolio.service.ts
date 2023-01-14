import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Data } from '@angular/router';
import { proyecto } from '../component/body/proyectos/proyecto';
import { iEducacion } from '../component/body/educacion/iEducacion';
import { iHard } from '../component/body/habilidades/hard/iHard';
import { iSoft } from '../component/body/habilidades/soft/iSoft';
import { iExperiencia } from '../component/body/experiencia/iExperiencia';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  private api = './assets/Data/data.json'

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> {
    return this.http.get<any>('./assets/Data/data.json');
  }

  deleteProyecto(proyecto:proyecto): Observable<proyecto>{
    const url = `${this.api}/${'proyectos/'+ proyecto.id}`
    return this.http.delete<proyecto>(url);
  }

  deleteEducacion(educacion:iEducacion): Observable<iEducacion>{
    const url = `${this.api}/delete/educacion/${educacion.id}`
    return this.http.delete<iEducacion>(url);
  }

  deleteHardSkill(hard:iHard): Observable<iHard>{
    const url = `${this.api}/habilidades/${hard.id}`
    return this.http.delete<iHard>(url);
  }

  deleteSoftSkill(soft:iSoft): Observable<iSoft>{
    const url = `${this.api}/habilidades2/${soft.id}`
    return this.http.delete<iSoft>(url);
  }

  deleteExperiencia(experiencia:iExperiencia): Observable<iExperiencia>{
    const url = `${this.api}/experiencia/${experiencia.id}`
    return this.http.delete<iExperiencia>(url);
  }

}
