import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import {
  faTachometerAlt,
  faColumns,
  faPuzzlePiece
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentRoute: string;

  icon = {
    tachometerAlt: faTachometerAlt,
    columns: faColumns,
    puzzlePiece: faPuzzlePiece
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.currentRoute = window.location.pathname;
    console.log('current path:', this.currentRoute);
  }

}

