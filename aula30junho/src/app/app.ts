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

  constructor(private authstateservice: AuthStateService) {



    
  } //fim construtor

  ngOnInit(): void {
    this.authstateservice.initAuthListener();
  }
}
