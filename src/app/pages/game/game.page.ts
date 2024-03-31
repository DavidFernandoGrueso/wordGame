import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  public id: number = 0
  public nivel: any
  public opciones: any =[
    { id:1 ,name:"easy" ,opciones: 8, color: "warning" },
    { id:2 ,name:"medium" ,opciones: 5, color: "medium" },
    { id:3 ,name:"difficult" ,opciones: 3, color: "danger" }
  ]
  public iter: number[] = []
  public palabras: any[] = [
    "ayuda", "fuego","arroz", "vuela", "hielo","ruego", "torre","jugar", "hacha", "flama", "medio","piano",
    "huevo", "horno","feliz", "pedir", "papel",  "tiene", "manos", "techo", "fuego", "pared", "vacio","bajos",
    "llave", "pasta", "silla", "abeja", "campo", "coche", "perro", "gatos", "verde", "plano", "jugue","altos",
     "negro", "color", "dulce", "salto", "grano", "hojas", "nubes", "viene", "aire", "arena", "nieto", "lateo",
     "cerca", "lejos", "amigo","bello", "fiera", "cuero", "brazo", "mente", "llama", "lleno", "avion", "freno",
     "lamer", "lugar", "grano", "tonto", "lista", "letra", "prado", "cajas", "cubos", "casas", "picos", "risas"
  ]

  public palabra: string = ""
  public letras: string[] = []
  constructor(public activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.params["id"]
    this.nivel = this.opciones.find((item: any) => item.id == this.id)
    this.iter = Array(this.nivel.opciones).fill(0).map((x,i)=>i);

    const rand = Math.ceil(Math.random()*this.palabras.length)
    this.palabra = this.palabras[rand]
    this.letras = this.palabra.split("")
    this.palabra = this.palabra.toLowerCase();
    console.log(this.letras)
    return 0
  }

  onEnter(){
   
  }

}
