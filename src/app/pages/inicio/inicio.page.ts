import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public nivel: number = 0
  public player: string = ""
  public opciones: any[] =[
    { id:1 ,name:"easy" ,color: "warning" },
    { id:2 ,name:"medium" ,color: "medium" },
    { id:3 ,name:"difficult" ,color: "danger" }
  ]



  constructor(public router: Router) { }

  ngOnInit() {
    return 0
  }

  onNivel(id: number){
  this.router.navigate(["/game", id])
  }

}

