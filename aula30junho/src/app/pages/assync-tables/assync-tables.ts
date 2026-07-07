import { ChangeDetectorRef, Component } from '@angular/core';
import { IUtilizador } from '../../shared/i-utilizador';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FakeBack } from '../../service/fake-back';

type LocalError = {errorAssync: boolean, errorNome: string};

@Component({
  selector: 'app-assync-tables',
  imports: [CommonModule],
  templateUrl: './assync-tables.html',
  styleUrl: './assync-tables.css',
})
export class AssyncTables {

  ///utilizador Promise/thencatch
  localUserPromise:IUtilizador [] = [];

  ///utilizador com assync await
  localUserAssyncPromise: IUtilizador[] =[];

  ///utilizador com Observable (typescript)
  localUserObservable$:Observable<IUtilizador[]>;

  ///criação das variáveis de error
  errorPromise: LocalError = {errorAssync: false, errorNome:""};
  errorAssyncAwaitPromise: LocalError = {errorAssync: false, errorNome:""};
  errorObservable: LocalError = {errorAssync: false, errorNome:""};

  ///falaremos sobre DI ou Injeção de Dependencia
  constructor(
    protected fakeBack: FakeBack,
    private cdr:ChangeDetectorRef,
  ) {
 // this.localUserObservable$ =fakeBack.getUtilizadoresObservable();

  //invocando o metodo promise
  this.carregarPromise();
  }

  carregarPromise = () => {
  this.fakeBack
  .getUtilizadorPromise().then((res:IUtilizador[]) => {
   console.log("Nosso Result: ", res);
    return (this.localUserPromise = res);
  }).catch((e) =>{
   console.log("Nosso Error: ", e);
    this.errorPromise = {errorAssync: true, errorNome: "Error no carregarPromise(): " + e};
    this.localUserPromise= [];
  })
  }

  carregarAssyncAwaitPromise() {

  }

  carregarObservable = () => {

  }



}///endclass
