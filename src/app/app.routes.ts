import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { DirectCallComponent } from './direct-call/direct-call.component';

const routes: Routes = [
  { path: 'en/main', component: MainComponent },
  { path: 'en/about', component: AboutComponent },
  { path: 'en/directCall', component: DirectCallComponent },
  { path: 'pl/directCall', component: DirectCallComponent },
  { path: 'pl/main', component: MainComponent },
  { path: 'pl/about', component: AboutComponent },
  { path: '', redirectTo: getDefaultRoute(), pathMatch: 'full' },
  { path: '**', redirectTo: getDefaultRoute(), pathMatch: 'full' } // Wildcard route
];

function getDefaultRoute(): string {
  return navigator.language.startsWith('pl') ? 'pl/main' : 'en/main';
}

export { routes };