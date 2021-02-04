import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MarktubersichtComponent } from './marktubersicht.component';

const routes: Routes = [{ path: '', component: MarktubersichtComponent }];

@NgModule({
    declarations: [
        MarktubersichtComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MarktubersichtModule {}
