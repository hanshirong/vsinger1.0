import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musician-card-template',
  templateUrl: './musician-card-template.component.html',
  styleUrls: ['./musician-card-template.component.css']
})
export class MusicianCardTemplateComponent implements OnInit {
  authorTop="LEMON";
  author="ilem";
  authorBottom="PUYOUPUYOU"
  constructor() { }

  ngOnInit() {
  }

}
