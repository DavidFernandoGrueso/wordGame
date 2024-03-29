import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';
import { FilaComponent } from 'src/app/components/fila/fila.component';
import { CeldaComponent } from 'src/app/components/celda/celda.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule
  ],
  declarations: [GamePage,FilaComponent,CeldaComponent]
})
export class GamePageModule {}
