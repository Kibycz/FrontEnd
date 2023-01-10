import { Component, OnInit } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/sevice/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private authService:AuthService, private ruta:Router) { 
    this.form = new FormGroup({
      password: new FormControl(),
      email: new FormControl()
    })

  }

  ngOnInit(): void {
  }

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
  
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
    this.authService.iniciarSesion(this.form.value)
      .then(response=>{
        console.log(response);
        this.ruta.navigate(['/portfolio']);
      })
      .catch(error=>alert(error + " Correo o contraseña incorrecta"));
  }

}
