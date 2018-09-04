import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  radioModel = 1;

  constructor() { }

  ngOnInit() { }

}
