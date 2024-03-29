import { Component, Input, OnInit, input } from '@angular/core';
import { GamePage } from 'src/app/pages/game/game.page';
import { CeldaComponent } from '../celda/celda.component';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.scss'],
})
export class FilaComponent  implements OnInit {


  @Input() palabra!: string
   @Input() letras!: string[]
  constructor() { }

  ngOnInit(){
    console.log(this.palabra)
    this.palabra = this.palabra.toLowerCase()
    return 0
  }

}
