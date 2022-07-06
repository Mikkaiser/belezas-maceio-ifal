import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeachesComponent } from './beaches/beaches.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { TuristicTargetsComponent } from './turistic-targets/turistic-targets.component';
import { CraftworkComponent } from './craftwork/craftwork.component';
import { MenuComponent } from './menu/menu.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BeachesComponent,
    HotelsComponent,
    RestaurantsComponent,
    TuristicTargetsComponent,
    CraftworkComponent,
    MenuComponent,
    TitlePageComponent,
    ItemCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
