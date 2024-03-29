import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.scss'],
})
export class CeldaComponent  implements OnInit {

  @Input() palabra!: string
  @Input() letra!: string
  public opcion: string = ""
  public css: string = ""
  constructor() { }

  ngOnInit() {
    this.palabra = this.palabra.toLowerCase()

    return 0

  }

  onProbar(){

    if(this.opcion==this.letra){
      this.css = 'acierto'
    } else {
      if(this.palabra.includes(this.opcion)){
        this.css = 'casi'
      } else {
        this.css = 'fallo'
    }
   }
   console.log(this.opcion)
  }

}
