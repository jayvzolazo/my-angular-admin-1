import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import {
  faTachometerAlt,
  faColumns,
  faPuzzlePiece,
  faFileAlt,
  faThLarge,
  faFont,
  faAngleRight,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentRoute: string;
  componentsShown: boolean;

  icon = {
    tachometerAlt: faTachometerAlt,
    columns: faColumns,
    puzzlePiece: faPuzzlePiece,
    fileAlt: faFileAlt,
    thLarge: faThLarge,
    font: faFont,
    angleRight: faAngleRight,
    angleDown: faAngleDown
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.currentRoute = window.location.pathname;

    this.setToggleMenu(this.currentRoute);
  }

  setToggleMenu(route: string): void {
    const path = route.split('/');

    switch (path[1]) {
      case 'components':
        this.componentsShown = true;
        break;
      default:
        this.componentsShown = false;
        break;
    }
  }

  toggleComponents(): void {
    this.componentsShown = !this.componentsShown;
  }

  onNavClick(): void {
    this.currentRoute = window.location.pathname;
  }
}

