import { Component, OnInit, Input } from '@angular/core';
export interface SongClass{
  picture?:String;
  title?:String;
  author?:String;
  view?:Number;
  date?:Number;
  aid?:Number;
  cid?:Number;
  VV?:Number;
}
export interface IconClass{
  first?:String;
  second?:String;
}
@Component({
  selector: 'app-recommend-card',
  templateUrl: './recommend-card.component.html',
  styleUrls: ['./recommend-card.component.css']
})
export class RecommendCardComponent implements OnInit {
  @Input() song:SongClass={   
     
  };
  @Input() icons:IconClass={

  };
  constructor() { }

  ngOnInit() {
  }

}
