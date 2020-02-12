import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

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
  @Input() song:SongClass[]=[];
  @Input() icons:IconClass={};
  @Input() cardWidth="267px";
  @Input() cardHeight="190px";
  // @Input() imgHeight="126px";
  @Input() imgHeight:string;
  @Output() cardSelected=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  handleSelection(){
   // console.log(e.title);
   this.cardSelected.emit(this.song);

  }

}
