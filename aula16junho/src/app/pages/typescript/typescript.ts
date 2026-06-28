import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.html',
  styleUrl: './typescript.css',
})
export class Typescript implements OnInit {
  //quando temos mais de um tipo, temos que realizar o CASTING
  numeroDaCasa: number | string | undefined | null;
  numeroDaLoja: string;

  constructor() {
    this.numeroDaCasa = 1;
    this.numeroDaLoja = '1';
  }

  ngOnInit(): void {
    /// este recebe somente 1 tipo de dado r precisa fazer CASTING
    const localNumber: number = this.numeroDaCasa as number;
    //posso fazer o CASTINBG pelo Diamente
    const localNumber2: number = <number>this.numeroDaCasa;
    ///este aqui recebe os 4 tipos de dados
    this.numeroDaCasa = this.numeroDaCasa;

    console.log('Nosso número : ' + localNumber);
  }

  meuNumeroDeCAsa(): number {
    const localNome = 'Tony';
    console.log(
      'Nosso número : ' + this.meuNumeroDeCAsa,
      'Nosso outro número: ' + this.numeroDaLoja,
    );
    console.log('Minha string' + localNome);
    return this.numeroDaCasa as number;
  }

  meuNome(): string | undefined {
    const localNome = 'Tony';
    console.log(
      'Nosso número : ' + this.meuNumeroDeCAsa,
      'Nosso outro número: ' + this.numeroDaLoja,
    );
    console.log('Minha string' + localNome);
    return "Meu nome é Tony";
    //return undefined;
  }

meuNome2 = (): string => {
const localNome = 'Tony';
    console.log(
      'Nosso número : ' + this.meuNumeroDeCAsa,
      'Nosso outro número: ' + this.numeroDaLoja,
    );
    console.log('Minha string' + localNome);
    return "Meu nome é Tony";
}




}
