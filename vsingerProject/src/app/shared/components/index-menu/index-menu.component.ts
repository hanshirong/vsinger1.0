import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenu{
  title:string;
  link:string;
  id:number;
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
  submenus:TopMenu[]=[];
  @Input() menus: TopMenu[] = []
  @Output() menuSelected=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  handleClick(e:number){
    //console.log(this.menus[e].submenus);
    this.submenus=this.menus[e].submenus;
    this.selectedIndex=e;
    this.selectedsubIndex=0;
    this.menuSelected.emit(this.menus[this.selectedIndex]);
   }
   handleSubClick(e:number){
    //console.log(this.menus[e].submenus);
    this.selectedsubIndex=e;
    this.menuSelected.emit(this.menus[this.selectedIndex].submenus[this.selectedsubIndex]);
   }

}
