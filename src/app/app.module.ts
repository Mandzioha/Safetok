import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { DirectCallComponent } from './direct-call/direct-call.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    AboutComponent,
    DirectCallComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }