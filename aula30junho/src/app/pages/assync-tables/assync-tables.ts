import { ChangeDetectorRef, Component } from '@angular/core';
import { IUtilizador } from '../../shared/i-utilizador';
import { catchError, Observable, of, switchMap, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FakeBack } from '../../service/fake-back';

type LocalError = { errorAssync: boolean; errorNome: string };

@Component({
  selector: 'app-assync-tables',
  imports: [CommonModule],
  templateUrl: './assync-tables.html',
  styleUrl: './assync-tables.css',
})
export class AssyncTables {
  ///utilizador Promise/thencatch
  localUserPromise: IUtilizador[] = [];

  ///utilizador com assync await
  localUserAssyncPromise: IUtilizador[] = [];

  ///utilizador com Observable (typescript)
  localUserObservable$: Observable<IUtilizador[]>;

  localUserSubscritions: IUtilizador[] = [];

  ///criação das variáveis de error
  errorPromise: LocalError = { errorAssync: false, errorNome: '' };
  errorAssyncAwaitPromise: LocalError = { errorAssync: false, errorNome: '' };
  errorObservable: LocalError = { errorAssync: false, errorNome: '' };
  cdr: any;

  ///falaremos sobre DI ou Injeção de Dependencia
  constructor(
    protected fakeBack: FakeBack,
    //private cdr:ChangeDetectorRef,
  ) {
    this.localUserObservable$ = fakeBack.getUtilizadoresObservable();

    //invocando o metodo promise
    this.carregarPromise();

    ///invocando o 2º método de promise
    this.carregarAssyncAwaitPromise();

    this.carregarObservable();

    ///invocar o metodo observable
    this.carregarObservable();
    this.cdr.detectchanges();
  }

  carregarPromise = () => {
    this.fakeBack
      .getUtilizadorPromise()
      .then((res: IUtilizador[]) => {
        //console.log("Nosso Result: ", res);
        return (this.localUserPromise = res);
      })
      .catch((e) => {
        console.log('Nosso Error: ', e);
        this.errorPromise = { errorAssync: true, errorNome: 'Error no carregarPromise(): ' + e };
        this.localUserPromise = [];
      });
  };

  /**Assync & wait */
  carregarAssyncAwaitPromise() {
    this.fakeBack
      .getUtilizadoresAsync()
      .then((res: IUtilizador[]) => {
        console.log('Nosso Result em carregarAssyncAWaitPromise: ', res);
        this.localUserAssyncPromise = res;
      })
      .catch((error) => {
        console.error('Nosso Error: ', error);
        this.localUserAssyncPromise = [];
        this.errorAssyncAwaitPromise = {
          errorAssync: true,
          errorNome: 'Error no carregarAssyncAWaitPromise(): ' + error,
        };
      });
  }

  carregarObservable = () => {
    ///falar um pouco sobre RxJS
    ///operador take(1), este cara faz com q apos 1 subscrição o canal de dados seja desligadao
    this.fakeBack
      .getUtilizadoresObservable()
      .pipe(
        take(1),
        switchMap((res: IUtilizador[]) => {
          console.log('Nosso Result em carregarObservable(): ', res);
          this.localUserSubscritions = res;
          this.cdr.detectchanges();
          return (this.localUserSubscritions = res);
        }),
        catchError((error) => {
          console.error('Nosso Error em CarregarAssyncAwaitPromise(): ', error);
          this.errorObservable = {
            errorAssync: true,
            errorNome: 'Erro no metodo carregarObservable: ' + error,
          };
          return of([]);
        }),
      )
      .subscribe();
  };

  carregarObservableComSubscribleObjeto = () => {
    this.fakeBack
      .getUtilizadoresObservable()
      .pipe(
        take(1),
        switchMap((res: IUtilizador[]) => {
          console.log('carrgarobservablecomsubscribleobjecto(): ', res);
          return res;
        }),
      )
      .subscribe({
        next: (result) => {
          console.log('nosso dado: ', result);
        },
        error: (e) =>
          console.log('nosso Erro no metodo carregarObservableComSubscribeOjecto()' + e),
        complete: () => console.log('nosso complete, terminou o Observable'),
      });
  };
} ///endclass
