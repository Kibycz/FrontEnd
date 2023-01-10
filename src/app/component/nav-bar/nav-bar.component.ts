import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/sevice/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  constructor(private router:Router, public authService:AuthService) { 
    
  }

  ngOnInit(): void {
  }

  logout(event: Event){
    event.preventDefault;
    this.authService.logout()
    .then(()=> {
      this.router.navigate(['/login']);
    })
    .catch(error=>console.log(error));
  }

}
