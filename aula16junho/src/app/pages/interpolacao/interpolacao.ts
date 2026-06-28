import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  imports: [],
  templateUrl: './interpolacao.html',
  styleUrl: './interpolacao.css',
})
export class Interpolacao {
  ///template literal
  nome: string = 'Tony';
  idade: number = 42;

  constructor() {
    const mensagem = `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    const mensageSemInterpolacao = 'Olá, meu nome é' + this.nome + 'e tenho' + this.idade + 'anos';

    console.log('Minha Interpolação:', mensagem);
  }
}
