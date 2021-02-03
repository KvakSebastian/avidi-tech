import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/depotubersicht', pathMatch: 'full' },
  {
    path: 'depotubersicht',
    loadChildren: () =>
        import('./depotubersicht/depotubersicht.module').then((m) => m.DepotubersichtModule),
  },
  {
    path: 'depotubersicht-info',
    loadChildren: () =>
        import('./depotubersicht-info/depotubersicht-info.module').then((m) => m.DepotubersichtInfoModule),
  },
  {
    path: 'marktubersicht',
    loadChildren: () =>
        import('./marktubersicht/marktubersicht.module').then((m) => m.MarktubersichtModule),
  },
  {
    path: 'watchlist',
    loadChildren: () =>
        import('./watchlist/watchlist.module').then((m) => m.WatchlistModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
