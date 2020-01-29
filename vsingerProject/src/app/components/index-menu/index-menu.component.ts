import { Component, OnInit } from '@angular/core';

interface TopMenu{
  title:string;
  link:string;
  submenus ?:TopMenu[] 
}
@Component({
  selector: 'app-index-menu',
  templateUrl: './index-menu.component.html',
  styleUrls: ['./index-menu.component.css']
})
export class IndexMenuComponent implements OnInit {
  selectedIndex=0;
  selectedsubIndex=0;
  handleClick(e){
   //console.log(this.menus[e].submenus);
   this.submenus=this.menus[e].submenus;
   this.selectedIndex=e;
  }
  submenus:TopMenu[]=[];
  menus: TopMenu[] = [
    {
      title:'首页',
      link:'',
      submenus:[
        {
          title:'推荐',
          link:'',
        },
        {
          title:'上新',
          link:'',
        },
        {
          title:'音乐人',
          link:'',
        },
        {
          title:'排行榜',
          link:'',
        },
        {
          title:'分区',
          link:'',
        },
      ]
    },
    {
      title:'音乐',
      link:'',
      submenus:[
        {
          title:'推荐',
          link:'',
        }
      ]
    },
    {
      title:'动画',
      link:'',
      submenus:[
        {
          title:'推荐',
          link:'', 
        }
      ]
    },
    {
      title:'文章',
      link:'',
      submenus:[
        {
          title:'推荐',
          link:'',
        }
      ]
    },
    {
      title:'相册',
      link:'',
      submenus:[
        {
          title:'推荐',
          link:'',
        }
      ]
    },
    {
      title:'教程',
      link:'',
      submenus:[
        {
          title:'推荐',
          link:'',
        }
      ]
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
