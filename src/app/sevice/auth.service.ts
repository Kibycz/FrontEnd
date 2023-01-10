import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //url="http://localhost:4200/login";
  //currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient, private auth:Auth) { 
    console.log("El servicio de Auth esta corriendo")
    //this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  iniciarSesion({email, password}:any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

  public logIn(): boolean {
    return this.auth !== null;
  }
}
