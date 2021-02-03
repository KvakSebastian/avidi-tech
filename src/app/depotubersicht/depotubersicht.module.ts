import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { DepotubersichtComponent } from './depotubersicht.component';

const routes: Routes = [{ path: '', component: DepotubersichtComponent }];

@NgModule({
    declarations: [
        DepotubersichtComponent
    ],
imports: [CommonModule,ChartsModule, RouterModule.forChild(routes)],
})
export class DepotubersichtModule {}