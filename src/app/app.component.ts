import { LoginService } from './aplication/service/login.service';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig, private loginService:LoginService) {
    this.loginService.verificarAuth();
  }

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}
