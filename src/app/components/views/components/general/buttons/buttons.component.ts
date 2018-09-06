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

  buttons = {
    colors: [
      { label: 'Button', class: 'primary' },
      { label: 'Button', class: 'secondary' },
      { label: 'Button', class: 'success' },
      { label: 'Button', class: 'danger' },
      { label: 'Button', class: 'warning' },
      { label: 'Button', class: 'info' },
      { label: 'Button', class: 'light' },
      { label: 'Button', class: 'dark' },
      { label: 'Button', class: 'link' },
      { label: 'Button', class: 'default' }
    ]
  };

  constructor() { }

  ngOnInit() { }

}
