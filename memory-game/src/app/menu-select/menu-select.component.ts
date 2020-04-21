import { Component, Input, OnInit } from '@angular/core';
import { MenuOption } from '../models/menu.model';

@Component({
  selector: 'app-menu-select',
  templateUrl: './menu-select.component.html',
  styleUrls: ['./menu-select.component.scss'],
})
export class MenuSelectComponent implements OnInit {
  @Input() menu: MenuOption;
  constructor() {}

  ngOnInit() {}
}
