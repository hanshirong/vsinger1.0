import { Component, OnInit, Input } from '@angular/core';
export interface bannerClass{
  title:string,
  linkName:string,
  link?:string
}
export interface dataClass{
  songNumber?:number,
  upNumber?:number
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
  @Input() data:dataClass={}   
  
  constructor() { }

  ngOnInit() {
  }

}
