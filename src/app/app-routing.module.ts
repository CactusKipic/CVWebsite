import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import {ProjetsTechniquesComponent} from './projets-techniques/projets-techniques.component';
import {ProjetsPersosComponent} from './projets-persos/projets-persos.component';
import {LiensComponent} from './liens/liens.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainpageComponent },
  { path: 'Projets_Techniques', component: ProjetsTechniquesComponent },
  { path: 'Projets_Persos', component: ProjetsPersosComponent },
  { path: 'Liens', component: LiensComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
