import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AcercaDeComponent } from './component/body/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './component/body/experiencia/experiencia.component';
import { EducacionComponent } from './component/body/educacion/educacion.component';
import { HabilidadesComponent } from './component/body/habilidades/habilidades.component';
import { ProyectosComponent } from './component/body/proyectos/proyectos.component';
import { ContactoComponent } from './component/body/contacto/contacto.component';
import { from } from 'rxjs';
import { HardComponent } from './component/body/habilidades/hard/hard.component';
import { SoftComponent } from './component/body/habilidades/soft/soft.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { LoginComponent } from './component/login/login.component';
import { PorfolioService } from './sevice/porfolio.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    HardComponent,
    SoftComponent,
    PortfolioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
