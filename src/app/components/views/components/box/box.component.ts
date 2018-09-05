import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  sampleBoxContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
    'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
    'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ' +
    'anim id est laborum.';

  boxes = [
    { title: 'Box Title 1', content: this.sampleBoxContent, class: 'warning' },
    { title: 'Box Title 2', content: this.sampleBoxContent, class: 'danger' },
    { title: 'Box Title 3', content: this.sampleBoxContent, class: 'success' },
    { title: 'Box Title 4', content: this.sampleBoxContent, class: 'info' }
  ];

  constructor() { }

  ngOnInit() { }

}
