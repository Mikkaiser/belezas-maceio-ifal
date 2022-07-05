import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeachesComponent } from './beaches/beaches.component';
import { CraftworkComponent } from './craftwork/craftwork.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { TuristicTargetsComponent } from './turistic-targets/turistic-targets.component';

const routes: Routes = [
  { path: '', component: BeachesComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'attractions', component: TuristicTargetsComponent },
  { path: 'craftwork', component: CraftworkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
