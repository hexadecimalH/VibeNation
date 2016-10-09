import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders} from './app.routing';

// import { TrackScrollDirective } from './directives/track-scroll.directive'

import { LastFmService,YouTubeService,HeaderComponent,FooterComponent } from './components/index'
import {  WelcomeComponent , SignService,AuthService,DiscoverComponent} from './components/index'
import {  ArtistComponent ,OverviewComponent,AlbumsComponent ,SongsComponent} from './components/index'
import {  PlaylistComponent } from './components/index'
import {  SimilarComponent } from './components/index'
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule,FormsModule,HttpModule,routing ],
  declarations: [ AppComponent ,
                  HeaderComponent,
                  FooterComponent,
                  WelcomeComponent,
                  DiscoverComponent,
                  ArtistComponent,
                  OverviewComponent,
                  AlbumsComponent,
                  SongsComponent,
                  SimilarComponent,
                  PlaylistComponent,
                  // TrackScrollDirective
                  ],
  bootstrap: [ AppComponent ],
  providers:[YouTubeService,LastFmService,SignService,appRoutingProviders,AuthService]

})
export class AppModule { }
