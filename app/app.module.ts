import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { LastFmService,YouTubeService,HeaderComponent,FooterComponent , WelcomeComponent} from './components/index'
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AppComponent , HeaderComponent,FooterComponent,WelcomeComponent],
  bootstrap: [ AppComponent ],
  providers:[YouTubeService,LastFmService]
})
export class AppModule { }
