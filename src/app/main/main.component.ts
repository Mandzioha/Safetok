import { Component, inject, OnInit } from '@angular/core';
import { injectTranslation } from '../translations/translator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    injectTranslation();
  }
  // Component logic here
}