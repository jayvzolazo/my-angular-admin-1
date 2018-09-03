import { Component, OnInit } from '@angular/core';

import {
  faUsers,
  faCodeBranch,
  faTasks
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'Angular Admin';

  icon = {
    users: faUsers,
    codeBranch: faCodeBranch,
    tasks: faTasks
  };

  constructor() { }

  ngOnInit() { }

}
