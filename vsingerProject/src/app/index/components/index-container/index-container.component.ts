import { Component, OnInit } from '@angular/core';
import { TopMenu, ImageSliderClass, dataClass } from 'src/app/shared/components';
import { Router } from '@angular/router';
import { IndexService } from '../../services';

@Component({
  selector: 'app-index-container',
  templateUrl: './index-container.component.html',
  styleUrls: ['./index-container.component.css']
})
export class IndexContainerComponent implements OnInit {
  menus: TopMenu[] = []
  sliders:ImageSliderClass[]=[
   {
    imgUrl:'',
    link:'',
    caption:'',
   } 
  ];
  data:dataClass={
      songNumber:120712,
      upNumber:2012
  }
  constructor(private router:Router,private service:IndexService) { }
  
  ngOnInit() :void{
    this.menus=this.service.getMenus();
  }
  handleMenuClick(menu:TopMenu){
    this.router.navigate(['index',menu.link])
  }

}
