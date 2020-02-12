import { Component, OnInit } from '@angular/core';
export interface RankData{
  type?:string,
  data?:Array<RankDataClass>
}
export interface RankDataClass{
  title?:string,
  author?:string,
  link?:string
}
@Component({
  selector: 'app-rank-card-template',
  templateUrl: './rank-card-template.component.html',
  styleUrls: ['./rank-card-template.component.css']
})
export class RankCardTemplateComponent implements OnInit {
  rankData:RankData={
    type:"日榜",
    data:[{
      title:'lemonpuyou',
      author:'ilem'
    },{
      title:'噗哟噗哟',
      author:'ilem'
    },{
      title:'lemon',
      author:'ilem'
    }]
  }

  constructor() { }

  ngOnInit() {
  }

}
