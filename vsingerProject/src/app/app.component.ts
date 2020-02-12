import { Component } from '@angular/core';
import { ImageSlider, ImageSliderClass } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  imageSliders :ImageSliderClass[]=[{
    imgUrl:'http://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=8a779edf273fb80e0c8469d303e10318/54fbb2fb43166d22c4d4877a402309f79152d2b9.jpg',
    link:'',
    caption:''
  },{
    imgUrl:'http://i0.hdslb.com/bfs/article/93ab591e9f34aecd5dde96aa7020121dc15bd752.jpg',
    link:'',
    caption:''
  },]
}
