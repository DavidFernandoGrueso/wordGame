import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnprobarService {

  constructor() { }

  onProbar(opcion: string, letra: string, palabra: string, css: string) {
    if (opcion === letra) {
      css = 'acierto';
    } else {
      if (palabra.includes(opcion)) {
        css = 'casi';
      } else {
        css = 'fallo';
      }
    }
    console.log(opcion);
    return css;
  }
}
