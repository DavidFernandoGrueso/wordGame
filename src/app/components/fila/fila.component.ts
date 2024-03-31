import { Component, Input, OnInit, input } from '@angular/core';
import { OnprobarService} from 'src/app/onprobar.service';



@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.scss'],
})
export class FilaComponent  implements OnInit {


  @Input() palabra!: string
   @Input() letras!: string[]

   @Input() letra!: string
   public opcion: string = ""
  public css: string = ""
  constructor(private onprobarService: OnprobarService) { }

  ngOnInit(){
    console.log(this.palabra)
    this.palabra = this.palabra.toLowerCase()
    return 0
  }

  onEnter() {

      this.onprobarService.onProbar(this.opcion, this.letra, this.palabra, this.css);

  }



}
