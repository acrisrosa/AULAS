import { Component } from '@angular/core';
import { saudacoes } from './tipo_de_functions/funct_declaracao_comum';
import { saudacoes2 } from './tipo_de_functions/funct_expressao';
import { somar } from './tipo_de_functions/funct_arrow_functions';
import { processar } from './tipo_de_functions/funct_call_back';

@Component({
  selector: 'app-functions',
  imports: [],
  templateUrl: './functions.html',
  styleUrl: './functions.css',
})
export class Functions {
  ///sobre o THIS
  localSomar = () => {
    return console.log("nossa soma:  ", 10 + 99);
  }

constructor() {

  const localMessage = saudacoes("tony");

    console.log("Minha invocação da função de declaração comum: na linha 23  " + localMessage);
    console.log("Minha invocação da função de declaração expressão: na linha 24  " + saudacoes2());
    console.log("Minha invocação da função da Arrow Function sem bloco comum: na linha 25  " + somar(10,20));
    console.log("Minha invocação da função da Arrow Function com bloco comum: na linha 26  " + somar(100,20));
    console.log("Minha invocação da função callback: na linha 27  " + processar(10,() => 20));
    console.log("Sobre o THIS: ", this.localSomar);

}

}
