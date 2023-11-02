import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonCardsPageComponent } from './page/digimon-cards-page/digimon-cards-page.component';


const routes: Routes = [
  {
    path: '',
    component: DigimonCardsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigimonCardsRoutingModule { }
