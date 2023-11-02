import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigimonCardsPageComponent } from './page/digimon-cards-page/digimon-cards-page.component';
import { DigimonCardsRoutingModule } from './digimon-cards-routing.module';
import { ImportModule } from '@shared/components/cards/import/import.module';
import { SelectPosicionModule } from '@shared/components/select-posicion/select-posicion.module';




@NgModule({
  declarations: [
    DigimonCardsPageComponent
  ],
  imports: [
    CommonModule,
    DigimonCardsRoutingModule,
    ImportModule,
    SelectPosicionModule
  ]
})
export class DigimonCardsModule { }
