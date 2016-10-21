import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { WelcomeComponent,DiscoverComponent,ArtistComponent,ForgotenPassComponent } from './components/index'
import {PlaylistComponent} from './components/index'

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path:'discover',component:DiscoverComponent},
  { path:'playlist',component:PlaylistComponent},
  { path:'artist/:artist',component:ArtistComponent},
  { path:'forgtenPass/:secureId',component:ForgotenPassComponent}
];
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
