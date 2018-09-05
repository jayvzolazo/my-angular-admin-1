import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = '2018';
  build = 'Angular v6.1.6 | Angular CLI v6.1.5 | Bootstrap v4.1.3 | ngBootstrap v3.1.0 | Font Awesome v5.3.1';

  constructor() { }

  ngOnInit() { }
}
