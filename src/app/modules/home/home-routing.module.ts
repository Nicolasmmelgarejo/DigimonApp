import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'digimonCards',
    loadChildren: () => import('@modules/DigimonCards/digimon-cards.module').then(m => m.DigimonCardsModule),
    //canActivate: [PermissionGuard]
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: 'digimonCards'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }