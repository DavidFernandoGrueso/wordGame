import { OnprobarService } from 'src/app/services/onprobar.service';
import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.scss'],
})
export class FilaComponent  implements OnInit {

  @Input() palabra!: string
  @Input() letras!: string[]
  @Output() filaCompleta = new EventEmitter<boolean>();
  letrasIngresadas: string[] = [];

  constructor(private onprobarService: OnprobarService) { }

  ngOnInit(){
    console.log(this.palabra)
    this.palabra = this.palabra.toLowerCase()

    return 0
  }

  onEnter() {
    this.letrasIngresadas = this.onprobarService.onProbar(this.letrasIngresadas, this.palabra, this.letras);
}

  onfinish(){
    const filaCompleta = this.letrasIngresadas.every(letra => letra.trim() !== '');
    this.filaCompleta.emit(filaCompleta);
  }

}
