import { NgModule ,ChangeDetectionStrategy}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

// import {provideStore} from '@ngrx/store';
// import {currentArtist} from './reducers/currentArtist'
// import {visibilityFilter} from './reducers/visibilityFilter'
// import {instrumentStore,Devtools} from '@ngrx/devtools'

import { routing, appRoutingProviders} from './app.routing';

//import { TrackScrollDirective } from './directives/track-scroll.directive'

import { LastFmService,YouTubeService,HeaderComponent,FooterComponent } from './components/index'
import {  WelcomeComponent , SignService,AuthService,DiscoverComponent} from './components/index'
import {  ArtistComponent} from './components/index'
import {  PlaylistComponent } from './components/index'
import { AppComponent }  from './app.component';
import { DataService } from './components/lastFm/data.service'

@NgModule({
  imports: [ BrowserModule,FormsModule,HttpModule,routing ],
  declarations: [ AppComponent ,
                  HeaderComponent,
                  FooterComponent,
                  WelcomeComponent,
                  DiscoverComponent,
                  PlaylistComponent,
                  ArtistComponent
                  //TrackScrollDirective
                  ],
  bootstrap: [ AppComponent],
  providers:[YouTubeService,LastFmService,SignService,appRoutingProviders,AuthService]

})
export class AppModule { }
