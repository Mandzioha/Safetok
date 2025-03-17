import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { injectTranslation } from './translations/translator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Safetok';
  language!: string;

  ngOnInit(): void {
    console.log('App component initialized');
    this.language = navigator.language.startsWith('pl') ? 'pl' : 'en';
    injectTranslation();
  }

  get mainRoute(): string {
    return `/${this.language}/main`;
  }

  get aboutRoute(): string {
    return `/${this.language}/about`;
  }

  get directCallRoute(): string {
    return `/${this.language}/directCall`;
  }
}