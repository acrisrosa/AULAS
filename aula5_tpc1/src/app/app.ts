import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagsImg } from "./tags-img/tags-img";
import { TagsVideo } from "./tags-video/tags-video";
import { TagsSemanticas } from "./tags-semanticas/tags-semanticas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagsImg, TagsVideo, TagsSemanticas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula5_tpc1');
}
