import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommend-card',
  templateUrl: './recommend-card.component.html',
  styleUrls: ['./recommend-card.component.css']
})
export class RecommendCardComponent implements OnInit {
  songName="洛天依原创曲";
  author="茶壶";
  VV=12345;
  constructor() { }

  ngOnInit() {
  }

}
