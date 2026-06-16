import { Component } from '@angular/core';

@Component({
  selector: 'app-lacos',
  imports: [],
  templateUrl: './lacos.html',
  styleUrl: './lacos.css',
})
export class Lacos {
  minhaCores: string[] = ['azul', 'vermelho', 'roxo', 'verde', 'preto'];

  constructor() {
    this.minhaCores[0];
    this.minhaCores[1];
    this.minhaCores[2];
    this.minhaCores[3];
    this.minhaCores[4];
    // this.minhaCores[5];   no java não dá erro ignora

    //for tradicional
    this.exemploForTradicional();
    ///for of
    this.exemploForOf();
    ///for each
    this.exemploForEach();
  } // fim do construtor

  ///for tradicional
  exemploForTradicional = () => {
    for (let i = 0; i < this.minhaCores.length; i++) {
      const element = this.minhaCores[i];
      console.log('Nosso Array: ', element, 'meu andar do prédio de cores: ' + i);
    }
  };

  ///forOf
  exemploForOf() {
    for (const data of this.minhaCores) {
      console.log('Nosso Array For Of: ', data);
    }
  }

  ///forEach
  exemploForEach = () => {
    // this.minhaCores.forEach(element => console.log('Nosso Array ForEach: ', element));
    this.minhaCores.forEach((element) => {
      console.log('Nossa Array  ForEach: ', element);
    });
  };
} ///fim de classe
