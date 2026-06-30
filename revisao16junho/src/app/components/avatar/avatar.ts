import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './avatar.css',
})
export class Avatar {
  localNome: string = 'Ana';
  localImage!: string;   ////!: desliga variavael

  logout() {
    //throw new Error('Method not implemented.');
    console.log('desligou');
  }
}
