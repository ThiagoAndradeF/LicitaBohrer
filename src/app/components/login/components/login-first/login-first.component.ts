
import { LoginService } from '../../../../aplication/service/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-first',
  templateUrl: './login-first.component.html',
  styleUrls: ['./login-first.component.scss']
})
export class LoginFirstComponent {
  Email!:string;

  private _senhaInvalida : boolean= false;
  public get senhaInvalida() : boolean {
    return this._senhaInvalida;
  }
  public set senhaInvalida(v : boolean) {
    this._senhaInvalida = v;
    if(this.senhaInvalida){
      setTimeout(() => {
        this.Password= '';
      }, 500);
    }

  }

  private _Password !: string;
  public get Password() : string {
    return this._Password;
  }
  public set Password(v : string) {
    this._Password = v;
    this.senhaInvalida = false;
  }


  constructor(private router: Router, private loginService:LoginService) {

   }


  public redirectCadastro(){
    this.redirectTo('cadastro')
  }


  public redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

  public logar() {
    this.loginService.requestLogin(this.Email, this.Password).subscribe(
      data => {
        if (data.status === 200 || data == true) {
          localStorage.setItem('authToken', 'logado');
          localStorage.setItem('mailStore', this.Email);
          setTimeout(() => {
            this.router.navigate(['']);
          }, 1000);
        } else {
          this.senhaInvalida = true;
          setTimeout(() => this.senhaInvalida = false, 500);
        }
      },
      error => {
        // Também lidar com erro de rede ou servidor aqui
        this.senhaInvalida = true;
        setTimeout(() => this.senhaInvalida = false, 500);
      }
    );
  }
  public logarFake(){
    localStorage.setItem('authToken', 'logado');
    localStorage.setItem('mailStore', this.Email);
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);
  }


}
