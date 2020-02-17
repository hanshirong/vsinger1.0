import { Component, OnInit } from '@angular/core';
import { SongClass, IconClass } from '../recommend-card';

@Component({
  selector: 'app-card-two-template',
  templateUrl: './card-two-template.component.html',
  styleUrls: ['./card-two-template.component.css']
})
export class CardTwoTemplateComponent implements OnInit {
  imgHeight="126px";
  songs:SongClass[]=[{
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

//  song:SongClass={
//   picture:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//   title:"test",
//   author:"茶壶",
//   VV:1234
//  }
 icons:IconClass={
   first:"user",
   second:"play-square"
 }
  
  constructor() { }

  ngOnInit() {
  }
  handleCardSelected(songDetail:SongClass){
    console.log(songDetail);
  }

}
