import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LetterSelectionComponent } from './letter-selection/letter-selection.component';

const routes: Routes = [
  { path: '', component: LetterSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
