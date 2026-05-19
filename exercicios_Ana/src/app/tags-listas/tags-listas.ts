import { Component } from '@angular/core';

@Component({
  selector: 'app-tags-listas',
  imports: [],
  templateUrl: './tags-listas.html',
  styleUrl: './tags-listas.css',
})
export class TagsListas {

  /**Isto é uma string */
  minhaString: string = "Cooper";

  /**Isto é um array de string */
  minhaLista: string[] = ["Brutus","DATE_PIPE_DEFAULT_OPTIONS", "yara", "mini", "1", "false"];

  /**Minha lista de Any */
  minhaListaJS: any[] = ["Brutus","DATE_PIPE_DEFAULT_OPTIONS", "yara", "mini", 1, false];
}
