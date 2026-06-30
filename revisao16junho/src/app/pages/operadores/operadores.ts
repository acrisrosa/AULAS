import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-operadores',
  imports: [CommonModule],
  templateUrl: './operadores.html',
  styleUrl: './operadores.css',
})
export class Operadores {
  ///Operadores aritmeticos
  ///Soma. subtração, multiplicação, divisão e resto
  localAritimeticos: string = '+, -, *, /, %';

  ///Operadores de comparação
  ///comparação sem tipagem, comparação com tipagem, diferente sem tipagem,
  ///diferente com tipagem, maior, menor, maior&igual, menor&igual
  localComparacao: string = '==, ===, !=, !==, >, <, >=, <=';

  exemploOperador = '3'; // se usar == o compilador vai falar que é if(3 == exemploOperador); true
  exemploOperador3Iguais = '3'; // se usar === o compilador vai falar que é if(3 === exemploOperador); false

  /// Operadores Lógicos
  /// & o E é 100% true
  /// || o Ou pode ter 1 true
  /// ?? coalescência nula, ou um e outro, substitui o if e else;
  localLogicos: string = ' &&, ||, ??';

  //Operador de Atribuição
  /**OBS: Em outras linguagens pode aparecer assim: =+, ou =- C#, javascript*/
  localAtribuicao: string = '=, +=, -=';

  ///Operador Ternario
  ///cursos
  localTernario: string = "localName: this.cursos ? 'curso de Java'  : 'curso de Js'  ";

  constructor() {
    let exemploNumber = 10;    ///aqui tenho 10
    /// Quanto tem na variavel exemploNumber ????   10+20=30
    exemploNumber += 20;        //// aqui tenho 30

    let localTernario = exemploNumber ? 50 : 100;

    /// ternario permite fazer pre checagem exemplo abaixo, quando a variavel for igual a 30, eu faço a atribuição de 50 senão eu faço valor 100

    let localTernario2 = exemploNumber === 30 ? 50 : 100; ///
  }
}
