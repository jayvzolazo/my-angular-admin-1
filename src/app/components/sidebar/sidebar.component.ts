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
  componentsShown = false;

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
  }

  toggleComponents(): void {
    this.componentsShown = !this.componentsShown;
  }

  onNavClick(): void {
    this.currentRoute = window.location.pathname;
  }
}

