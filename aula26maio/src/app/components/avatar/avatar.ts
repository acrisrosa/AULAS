import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
  localNome: string = 'Tony';
  localImage!: string ;

  //desmarcar - basta carregar em ctrlK´ctrlC
  // nome2: string =`20`;
  // nome3: string ='true';






  logout() {
    //throw new Error('Method not implemented.');
    console.log('desligou');
  }
}

//dentro class chama-se método fora da classe chama-se função
//a classe e tudo o que estiver aqui contido é o THIS
