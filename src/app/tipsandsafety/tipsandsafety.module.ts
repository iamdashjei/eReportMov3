import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipsandsafetyPage } from './tipsandsafety.page';

const routes: Routes = [
  {
    path: '',
    component: TipsandsafetyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipsandsafetyPage]
})
export class TipsandsafetyPageModule {}
