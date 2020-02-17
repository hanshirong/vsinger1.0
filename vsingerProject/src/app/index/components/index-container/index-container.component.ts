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
  sliders:ImageSliderClass[]=[]
  data:dataClass={}
  constructor(private router:Router,private service:IndexService) { }
  
  ngOnInit() :void{
    this.menus=this.service.getMenus();
    this.sliders=this.service.getSliders();
    this.data=this.service.getData();
  }
  handleMenuClick(menu:TopMenu){
    this.router.navigate(['index',menu.link])
  }

}
