import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-variaveis',
  imports: [CommonModule],
  templateUrl: './variaveis.html',
  styleUrl: './variaveis.css',
})
export class Variaveis {
  ///Variaveis Globais => podem ter acesso a todo o escopo
  nome="tony";
  localObjecto = {nome:'Tony', endereco: 'rua .....', numero:10, admin: false, lado: 'esquerdo'};

  constructor(){
    console.log("Minha variavel global Objeto constructor(): ", this.localObjecto);
    //temos que as invocar aqui no construtor
    this.metodoTestConst();
    this.metodoTestLet();
    this.metodoTestConst2();
    this.metodoTestLet2();
  }
 
  metodoTestLet() {
    console.log("Minha variavel global Objeto metodoTestLet(): ", this.localObjecto);
    this.nome= "Rafael";
    console.log("Minha variavel global Objeto metodoTestLet(): ", this.localObjecto);
  }

  metodoTestConst(){
    console.log("Minha variavel global Objeto metodoTestConst(): ", this.localObjecto);
    this.nome="Paulo";
     console.log("Minha variavel global Objeto metodoTestConst(): ", this.nome);
  }

    metodoTestConst2(){
      //var nome = 'tony';   a variavél var já não se usa porque existe perda de segurança
      ///escopo local Não usa this
      const localNome = "tony filho";
      const localNomeObjeto ={};
      const localNomeArray = [];
     console.log("Minha variavel const localNome no metodoTestConst(): ", localNome);
     ///neste caso não é necessário utilizar a função this.localNome porque é um metodo do escopo local
     // localNome="ana";    deu errro porque na const ela NÃO muda enquanto no let muda
     //localNomeObjecto ={nome: "Tony"};
     //localNomeArray =[1,2];
  }

      metodoTestLet2(){
      //var nome = 'tony';   a variavél var já não se usa porque existe perda de segurança
      ///escopo local Não usa this
      let localNome = "tony filho";
     console.log("Minha variavel const localNome no metodoTestConst(): ", localNome);
     ///neste caso não é necessário utilizar a função this.localNome porque é um metodo do escopo local
     localNome ="Monica"
     console.log("Minha variavel const localNome no metodoTestConst(): ", localNome);
  }

}
