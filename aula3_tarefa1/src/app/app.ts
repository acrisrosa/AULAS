import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagsH } from "./tags-h/tags-h";
import { TagsFormacao } from "./tags-formacao/tags-formacao";
import { TagsParagrafo } from "./tags-paragrafo/tags-paragrafo";
import { TagsListas } from "./tags-listas/tags-listas";
import { TagsLinks } from "./tags-links/tags-links";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagsH, TagsFormacao, TagsParagrafo, TagsListas, TagsLinks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula3_tarefa1');
}
