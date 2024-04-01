import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnprobarService {

  constructor() { }

  onProbar(letrasIngresadas: string[], palabra: string, letras: string[]): string[] {
    return letrasIngresadas.map((letraIngresada, index) => {
      const letraObjetivo = letras[index];

      if (letraIngresada === letraObjetivo) {
        return 'verde';
      } else if (palabra.includes(letraIngresada)) {
        return 'naranja';
      } else {
        return 'rojo';
      }
    });
  }
}
