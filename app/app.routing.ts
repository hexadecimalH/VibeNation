import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { WelcomeComponent,DiscoverComponent,ArtistComponent,OverviewComponent } from './components/index'
import { SongsComponent,AlbumsComponent,SimilarComponent, PlaylistComponent} from './components/index'

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path:'discover',component:DiscoverComponent},
  { path:'playlist',component:PlaylistComponent},
  { path:'artist',
  children:[
        {path:'',component:ArtistComponent,loadChildren:'overview',children:[
                {path:'overview',component:OverviewComponent},
                {path:'songs',component:SongsComponent},
                {path:'albums',component:AlbumsComponent},
                {path:'similar',component:SimilarComponent}
          ]},
  ]
}
];
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
