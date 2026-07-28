import { AuthStateService } from './../../service/auth-state';
import { Component, inject, input } from '@angular/core';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {

  //localNome: string = 'Ana';
 // localImage!: string;
  localUserComponentFilho = input<User>();
  private localService = inject(AuthStateService)


  ///@Input("nome da variavel") e o @OutPut("nome do metodo ou propriedade")

  logout() {
  //console.log('desligou')
  this.localService.logout();
}

}
