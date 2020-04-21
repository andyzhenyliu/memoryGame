import { Component, OnInit } from '@angular/core';
import { MenuOption } from '../models/menu.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  configuration: MenuOption[] = [
    {
      label: 'Beginner',
      time: 300,
      rule: {
        colors: 1,
        patterns: 4,
      },
    },
    {
      label: 'Medium',
      time: 240,
      rule: {
        colors: 2,
        patterns: 4,
      },
    },
    {
      label: 'Advance',
      time: 150,
      rule: {
        colors: 4,
        patterns: 4,
      },
    },
  ];

  constructor() {}

  ngOnInit() {}
}
