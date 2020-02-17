import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardHeadContent, SongClass, IconClass } from 'src/app/shared/components';

@Component({
  selector: 'app-index-detail',
  templateUrl: './index-detail.component.html',
  styleUrls: ['./index-detail.component.css']
})
export class IndexDetailComponent implements OnInit {
  selectedMenuLink;
  newContent:CardHeadContent={
    first:[{title:'良曲上新'},{title:'更多'}],
  }
  musicianContent:CardHeadContent={
    first:[{title:'音乐人'},{title:'更多'}],
  }
  rankContent:CardHeadContent={
    first:[{title:'排行榜'},{title:'更多'}],
  }
  otherContent:CardHeadContent={
    first:[{title:'其他分区'},{title:'更多'}],
    second:[{title:'动画'},{title:'教程'},{title:'文章'},{title:'相册'}],
  }
  newSongs:SongClass[]=[{
    picture:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title:"test",
      author:"茶壶",
      VV:1234
  },{
    picture:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title:"test2",
      author:"茶壶",
      VV:1234
  },{
    picture:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title:"test2",
      author:"茶壶",
      VV:1234
  },{
    picture:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title:"test2",
      author:"茶壶",
      VV:1234
  },{
    picture:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title:"test2",
      author:"茶壶",
      VV:1234
  },{
    picture:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title:"test2",
      author:"茶壶",
      VV:1234
  },{
    picture:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title:"test2",
      author:"茶壶",
      VV:1234
  },{
    picture:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title:"test2",
      author:"茶壶",
      VV:1234
  }]
  icons:IconClass={
    first:"user",
    second:"play-square"
  }

  imgHeight="262px";

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.selectedMenuLink=params.get('submenuLink');
      console.log( this.selectedMenuLink);
    })
  }

}
