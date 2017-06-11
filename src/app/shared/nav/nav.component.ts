import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-primary',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  model = 1;

  ngOnInit() {
  }

}
