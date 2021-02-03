import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepotubersichtInfoComponent } from './depotubersicht-info.component';

const routes: Routes = [{ path: '', component: DepotubersichtInfoComponent }];


@NgModule({
  declarations: [DepotubersichtInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
})
export class DepotubersichtInfoModule { }
