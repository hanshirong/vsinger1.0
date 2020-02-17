import { Component, Input } from '@angular/core';
export interface ImageSliderClass{
  imgUrl:string;
  link?:string;
  caption?:string;
}

@Component({
  selector: 'app-ant-carousel',
  templateUrl: './ant-carousel.component.html',
  styleUrls: ['./ant-carousel.component.css']
})
export class AntCarouselComponent {
  array = [1, 2, 3, 4];
  @Input() sliderHeight="551px";
  // effect = 'scrollx';
  @Input() sliders:ImageSliderClass[]=[];
}
