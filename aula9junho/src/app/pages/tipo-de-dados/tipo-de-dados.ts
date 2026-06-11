import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

type meuObjeto = {nome: string, endereco: string, numero: number, admin: boolean}  /** desta forma estou a tipar a variavel objeto */

@Component({
  selector: 'app-tipo-de-dados',
  imports: [CommonModule],
  templateUrl: './tipo-de-dados.html',
  styleUrl: './tipo-de-dados.css',
})
export class TipoDeDados implements OnInit {
  localString: string = 'meu texto'; /// tipo string   ///tipo char 'y'
  localNumber: number = 100; ///tipo number  /// long, biglong, int, inteiro, ....
  localBollean: boolean = false; ///tipo boolean
  localArray: string[] = ['Leo', 'Ana', 'Paulo', 'Rafael', 'Monica', 'Samara'];
  localArray2: number[] = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  localNull: null = null;
  localNull2!: null;
  localUndefined: undefined = undefined;
  localUndefined2: undefined;
  localObjecto = {nome: 'Tony', endereco: 'rua...', numero: 10, admin: false, lado: 'esquerdo'};
  localObjecto2: meuObjeto = {nome: 'Tony', endereco: 'rua...', numero: 10, admin: false}

  /**tipo de dados assyncronos */
  localPromise: Promise<string> = new Promise<string>((resolve, reject) => {
    if (resolve) {
      resolve('Aula de assincronos em Promise');
    }
    //else {   é opecional já não é necessãrio colocar
    reject('Error http 400');
    //}
  });

  localObservable$ = new Observable((a) => a.next('Aula de assincronos Observable'));
  localObservable2$: Observable<string> = of('Aula de assincronos Observables2');

  /** construtor de JS */
  constructor() {
    this.localObservable$.subscribe((data) =>
      console.log('minha variavel de observable com subscribe', data),
    );
    this.localPromise.then((result) =>
      console.log('minha variavel de promise com then', result),
    ); /**esta é a mais usada hoje */

    console.log('minha variavel de string : ', this.localString);
    console.log('minha variavel de number : ', this.localNumber);
    console.log('minha variavel de boolean : ', this.localBollean);
    console.log('minha variavel de array : ', this.localArray);
    console.log('minha variavel de null : ', this.localNull);
    console.log('minha variavel de undefined : ', this.localUndefined);
    // console.log("minha variavel de observable sem subscrição : ", this.localObservable$);
    //console.log("minha variavel de promise sem subscriçãostring : ", this.localPromise);
    console.log("minha variavel do tipo objecto: ", this.localObjecto2);
    console.log("minha variavel do tipo objecto.nome: ", this.localObjecto2.nome);
    console.log("minha variavel do tipo objecto.endereco: ", this.localObjecto2['endereco']);
    console.log("minha variavel do tipo objecto.numero: ", this.localObjecto2.numero);
    console.log("minha variavel do tipo objecto.admin: ", this.localObjecto2['admin']);
    

  }

  ngOnInit(): void {
    this.localObservable$.subscribe((data) =>
      console.log('minha variavel de observable com subscribe', data as string),
    );

    this.localObservable2$.subscribe({
      next: (result) => console.log('Nossa 2ª Observable: ' + result),
      error: (e) => console.log('Error do observable: ' + e),
      complete: () => console.log('Observable completo'),
    });
  }
}
