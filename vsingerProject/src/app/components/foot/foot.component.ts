import { Component, OnInit } from '@angular/core';

// import {footLogoText} from '../assets/images/footer-background-logo.png';
export interface LinkClass{
  key:number,
  img:Array<ImgClass>,
  links:LinkInterClass
}
export interface ImgClass{
  src?:string,
  popcover?:boolean,
  qr?:string,
  content?:string
}
export interface UrlClass{
  text?:string,
  url?:string,
  popcover?:boolean,
  br?:boolean,
  img?:string,
  content?:string
}
export interface LinkInterClass{
  title?:string,
  urls?:Array<UrlClass>
}
@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  netName="柠音";
  links:LinkClass[]= [
    {
        key: 1,
        img: [{src: ''}],
        links: {
            title: '传送门',
            urls: [
                {text: '关于我们', url: '#'},
                {text: '加入我们', url: '#'},
                {text: '友情链接', url: '#', br: true},
                {text: '站娘柠音', url: '#'},
            ]
        }
    },
    {
        key: 2,
        img: [{src: '', popcover: true, qr: '',content:'关注微博不迷路'},
            {src: '', popcover: true, qr: '',content:'关注微信欢乐多'}],
        links: {
            title: 'Vsinger',
            urls: [
                {text: '洛天依', url: 'http://www.zenith-grp.com/'},
                {text: '言和', url: 'https://vsinger.com/'},
                {text: '乐正绫', url: 'https://shop69979973.taobao.com/', br: true},
                {text: '乐正龙牙', url: 'https://space.bilibili.com/10878474'},
                {text: '墨清弦', url: 'https://www.acfun.cn/u/1413887.aspx'},
                {text: '徵羽摩柯', url: 'https://www.acfun.cn/u/1413887.aspx'},
            ]
        }
    },
    {
      key: 3,
      img: [],
      links: {
          title: '',
          urls: [
              {text: '微信', url: '#', popcover: true, img: '', content: '在微信上和天依玩耍吧'},
              {text: '微博', url: 'https://weibo.com/luotianyi0712'},
              {text: '哔哩哔哩空间', url: 'https://space.bilibili.com/36081646'},
              {text: '支付宝', url: '#', popcover: true, img: '', content: '等ing'},
          ]
      }
  },
]

  constructor() { }

  ngOnInit() {
  }

}
