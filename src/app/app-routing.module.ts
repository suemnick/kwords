import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LetterSelectionComponent } from './letter-selection/letter-selection.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', component: LetterSelectionComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
