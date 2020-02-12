import { Component, OnInit } from '@angular/core';
export interface bannerClass{
  title:string,
  linkName:string,
  link?:string
}
export interface dataClass{
  songNumber:number,
  upNumber:number
}
@Component({
  selector: 'app-record-banner',
  templateUrl: './record-banner.component.html',
  styleUrls: ['./record-banner.component.css']
})
export class RecordBannerComponent implements OnInit {
  info:bannerClass={
    title:"本站目前已收录",
    linkName:"收录&投稿",
    link:''
  }
  data:dataClass={
    songNumber:120712,
    upNumber:2012
  }
  constructor() { }

  ngOnInit() {
  }

}
