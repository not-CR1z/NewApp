import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  quizzes:any = [];
  nombreUsuario: string;
  result: string = '';
  loading = true;

  constructor(private loginService: LoginService, private router: Router, private dictionaryService: DictionaryService) { }
  logOut(): void {
    this.loginService.removeLocalStorage();
    this.router.navigate(['/inicio']);
  }

  ngOnInit(): void {
    this.getNombreUsuario();
  }

  getNombreUsuario(): void {
    //this.nombreUsuario = this.loginService.getTokenDecoded();
    this.nombreUsuario = this.dictionaryService.dictionary.ldap.givenName;
  }
}
