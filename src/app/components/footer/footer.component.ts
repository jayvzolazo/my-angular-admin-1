import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = '2018';
  build = 'Angular v6.1.6 | Angular CLI v6.1.5';

  constructor() { }

  ngOnInit() { }
}
