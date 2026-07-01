import { Injectable } from '@angular/core';
import { IUtilizador } from '../shared/i-utilizador';
import { DataDummy } from './dummy/sand-box';

@Injectable({
  providedIn: 'root',
})
export class FakeBack {
  localUtilizador: IUtilizador[] = DataDummy;

  /**1º é a PROMISE */
  // =====================================================
  // MÉTODO 1 - PROMISE
  // =====================================================
  // Este método retorna uma Promise
  // Ideal para ensinar .then() e .catch()
  // =====================================================

  getUtilizadorPromise(): Promise<IUtilizador[]> {
    return new Promise((resolve, reject) => {
      //simular um http ou seja requisição de uma API usaremos o setTimeout()
      setTimeout(() => {
        //para simular um erro criaremos uma variavel
        const sucesso = Math.random() > 0.5;
        if (sucesso) {
          /// se fosse uma API retornaria nossos dados, um Json, uma Stram,..etc
          resolve(this.localUtilizador);
        } else {
          reject('Error http 500');
        }
      }, 2000);
    });
  }

  // =====================================================
  // MÉTODO 2 - ASYNC / AWAIT
  // =====================================================
  // Este método também retorna Promise
  // Mas utiliza async/await
  // =====================================================

  async getUtilizadoresAsync(): Promise<IUtilizador[]> {
    try {
      const data = await this.getUtilizadorPromise();
      return data;
    } catch (error) {
      console.log('nosso método getUtilizadoresAsync() ', error);
      throw error;
    }
  }
}
