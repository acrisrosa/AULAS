import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-listas',
  imports: [],
  templateUrl: './tag-listas.html',
  styleUrl: './tag-listas.css',
})
export class TagListas {

  /**Isto é uma string */
  minhaString: string = "Paulo";
 
  /**Isto é um ARRAY de String, ou um predio de string na memória */
  minhaLista: string [] = ["Tony", "DATE_PIPE_DEFAULT_OPTIONS", "samara", "leonardo", "Priscila", "Sara", "1", "false"];
  
  /**Minha Lista de Any, não é comum usar o any, e ele desliga o TypeScript */
  minhaListaJS: any [] = ["Tony", "DATE_PIPE_DEFAULT_OPTIONS", "samara", "leonardo", "Priscila", "Sara", 1, false];
 
  /**Minha Lista (Super Array) com error */
  //minhaListaJSNumber: number [] = ["Tony", "DATE_PIPE_DEFAULT_OPTIONS", "samara", "leonardo", "Priscila", "Sara", "1", "false"];
}
