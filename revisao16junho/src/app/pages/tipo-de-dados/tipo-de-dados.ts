import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Operadores } from '../operadores/operadores';
import { Observable, of } from 'rxjs';

type meuObjecto = {nome: string; endereco: string; numero:number; admin:boolean};

@Component({
  selector: 'app-tipo-de-dados',
  imports: [CommonModule], //PERMITE UTILIZAR NO HTML IF, ELSE E O CASE, E ESTÁ INSTALADO NO NODE.MODULES
  templateUrl: './tipo-de-dados.html',
  styleUrl: './tipo-de-dados.css',
})
export class TipoDeDados implements OnInit {
  localString: string = 'meu texto'; ///tipo string ///tipo char 'y'
  localNumber: number = 100; ///tipo number ///long, biglong, int, inteiro.....
  localBolean: boolean = false; ///tipo booleano verdadeiro ou falso
  localArray: string[] = ['Leo', 'Ana', 'Rafael', 'Leo', 'Monica', 'false']; ///os dados do array têm que estar entre aspas
  localArray2: number[] = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  localNull: null = null;
  localNull2!: null;
  localUndefined: undefined = undefined;
  localUndefined2!: undefined;
  localObjecto = {nome:'Tony', endereco: 'rua .....', numero:10, admin: false, lado: 'esquerdo'};
  localObjecto2: meuObjecto = {nome:'Tony', endereco: 'rua .....', numero:10, admin: false};

  /**tipo de dados assycronos */
  localPromise: Promise<string> = new Promise<string>((resolve,reject) => {
    if (resolve){
    resolve('Aula de assincronos Promise');
  }
    //else{
      reject("Error Http 400");
    //}
  });

  localObservable$ = new Observable((a) => a.next('Aula de assincronos Observable'));
  localObservable2$: Observable<string> = of('Aula de assincronos Observables2');  //formula mais utilizada

  /** construtor do JS */
  constructor() {
    this.localObservable$.subscribe((data) =>
      console.log('a minha variavel de observable com subscribe', data as string));
    this.localPromise.then((result) => console.log(' *******************a minha variavel de promise com Then', result));
    console.log('minha variavel de string: ', this.localString);
    console.log('minha variavel de number: ', this.localNumber);
    console.log('minha variavel de boolean: ', this.localBolean);
    console.log('minha variavel de array: ', this.localArray);
    console.log('minha variavel de null: ', this.localNull);
    console.log('minha variavel de undefined: ', this.localUndefined);
    //console.log('minha variavel de promise sem Pending: ', this.localPromise);
    //console.log('minha variavel de observable sem Subscribe: ', this.localObservable$);
    console.log("minha variavel do tipo Objeto: " , this.localObjecto2);
    console.log("minha variavel do tipo Objeto.nome " , this.localObjecto2.nome);
    console.log("minha variavel do tipo Objeto.endereco " , this.localObjecto2['endereco']);
    console.log("minha variavel do tipo Objeto.numero " , this.localObjecto2.numero);
    console.log("minha variavel do tipo Objeto.admin " , this.localObjecto2['admin']);
  }

  /** construtor do Angula */
  ngOnInit(): void {
    this.localObservable2$.subscribe({
      next:(result) => console.log("Nosso 2º Observable: " + result),
      error:(e) => console.log("Error do Observable" +e),
      complete: () => console.log("Observable completo"),
    });
  }
}
