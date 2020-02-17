import { Component, OnInit, Input } from '@angular/core';
export interface CardHeadContent{
  first:Array<FirstGrade>,
  second?:Array<FirstGrade>
}
export interface FirstGrade{
  title:string
}
@Component({
  selector: 'app-head-template',
  templateUrl: './head-template.component.html',
  styleUrls: ['./head-template.component.css']
})
export class HeadTemplateComponent implements OnInit {
  @Input() content:CardHeadContent={
    first:[{title:'推荐更多'},{title:'更多'}],
    second:[{title:'良曲推荐'},{title:'传说助攻'},{title:'殿堂助攻'}]
  }
  constructor() { }

  ngOnInit() {
  }

}
