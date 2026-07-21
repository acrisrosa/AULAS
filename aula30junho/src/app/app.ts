import { Component, OnInit, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { AuthStateService } from './service/auth-state';

@Component({
  selector: 'app-root',
  imports: [Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('exercicio_aula26maio');

  constructor(private authstateservice: AuthStateService) {} //fim construtor

  ngOnInit(): void {
    this.authstateservice.initAuthListener();

    /**Forma de teste de dados */
    this.authstateservice.getUser().subscribe({
      next: (result) => {console.log("Nosso Result do Google no App.ts: ", result)},
      error: (error) => {console.error("Nosso Error no Auth no Firebase no App.ts: ", error)},
      complete: () => {console.log("Observable Finalizado no App.ts.")},
    });
  }
} // fim da class
