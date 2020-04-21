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
    },
    {
      label: 'Medium',
    },
    {
      label: 'Advance',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
