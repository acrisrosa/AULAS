import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-variaveis',
  imports: [CommonModule],
  templateUrl: './variaveis.html',
  styleUrl: './variaveis.css',
})
export class Variaveis {
  ///Variaveis globais elas estão em todo o escopo
  nome = 'Ana';
  localObjecto = { nome: 'Tony', endereco: 'rua...', numero: 10, admin: false, lado: 'esquerdo' };

  constructor() {
    console.log('Minha variavel global Objecto no construtor: ', this.localObjecto);
    /// Invocar no construtor
    this.metodoTestConst();
    this.metodoTestLet();
    this.metodoTestConst2();
    this.metodoTestLet2();
  }

  metodoTestLet() {
    console.log('Minha variavel global Objecto no metodoTestLet: ', this.localObjecto);
    this.nome = 'Rafael';
    console.log('Minha variavel global nome metodoTestLet: ', this.localObjecto);
  }
  metodoTestConst() {
    console.log('Minha variavel global Objecto no metodoTestConst: ', this.localObjecto);
    this.nome = 'Paulo';
    console.log('Minha variavel global nome no metodoTestConst: ', this.localObjecto);
  }

  metodoTestConst2 = () => {
    //var nome = 'tony';
    // escopo local NÃO usa this.
    const localNome = 'tony filho';
    console.log('Minha variavel const localNome no metodoTestConst(): ', localNome);
    //localNome = "ana"   sendo constante não pode mudar
  };

    metodoTestLet2 = () => {
    //var nome = 'tony';
    // escopo local NÃO usa this.
    let localNome = 'tony filho';
    console.log('Minha variavel const localNome no metodoTestConst(): ', localNome);
    localNome ="Monica"
    console.log('Minha variavel const localNome no metodoTestConst(): ', localNome);
  };
}
