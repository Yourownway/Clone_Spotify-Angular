import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { ProfilComponent } from './profil/profil.component';
import { SpotifyService } from './services/spotify.service';
import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MaterialModules } from './material-modules';

const appRoutes: Routes = [
  { path: 'profil', component: ProfilComponent },
  { path: 'search', component: SearchComponent },
  { path: '', component: ProfilComponent },
];
@NgModule({
  declarations: [AppComponent, SearchComponent, ProfilComponent],
  imports: [
    MaterialModules,
    BrowserModule,

    BrowserAnimationsModule,
    MatButtonModule,

    HttpClientModule,

    RouterModule.forRoot(appRoutes),
  ],
  providers: [SpotifyService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
