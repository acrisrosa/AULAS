import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-operadores',
  imports: [CommonModule],
  templateUrl: './operadores.html',
  styleUrl: './operadores.css',
})
export class Operadores {
  ///Operador aritimetricos
  //soma, subtração, multiplicação, divisão e resto
  localAritimeticos: string = '+, -, *, /, %';

  //Operador de comparação
  //comparação sem tipagem, comparação com tipagem, diferente sem tipagem, diferente com tipagem, maior, menor, maior&igual, menor&igual
  localComparacao: string = '==, ===, !=, !==, >, <, >=, <=';

  exemploOperador = '3'; // se usar == o compilador vai falar que é if (3 == exemploOperador); true
  exemploOperador3iguais = '3'; // se usar === o compilador vai falar que é if (3 === exemploOperador); false

  //Operadores Lógicos
  //&&=e é 100% true, ||=ou pode ter 1 true, ?? coalescência nula em javascript foi usada na imagem do avatar, (substitui o if e else)
  localLogicos = '&&, ||, ??';

  //Operador de Atribuição
  /**OBS: em outras linguagens pode aparecer assim: =+, ou =-    ==== comentário bloco*/
  localAtribuicao: string = ' = , +=, -=';

  //Operador Ternario
  //cursos
  localTernario: string = " localName = this.cursos ? 'curso de Java' : 'curso de JS' ";

  constructor() {
    let exemploNumber = 10; // aqui tenho 10
    ///quanto tem na variavel exemploNumber ???? 10+20=30
    exemploNumber += 20; // aqui tenho 30

    /**ternario permite fazer fazer primeiro uma checagem, exemplo abaixo, se variavel for igual a 30 faço a atribuição de 50 
       se não fica 100 */

    let localTernario = exemploNumber ? 50 : 100;
    let localTernario2 = exemploNumber === 30 ? 50 : 100;
  }
}
