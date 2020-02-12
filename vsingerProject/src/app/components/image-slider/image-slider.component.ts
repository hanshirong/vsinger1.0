import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';
export interface ImageSlider{
  imgUrl:string;
  link?:string;
  caption?:string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders:ImageSlider[]=[];
  @Input() sliderHeight="551px";
  @Input() intervalBySeconds=5;
  @ViewChild('imageSlider',{static:true}) imgSlider:ElementRef;
  @ViewChildren('img') imgs:QueryList<ElementRef>;
  selectIndex=0;
  intervalId;
  constructor(private rd2:Renderer2) { }

  ngOnInit() {
    
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log('ngAfter',this.imgs);
    // this.imgs.forEach(item=>{
    //   this.rd2.setStyle(item.nativeElement,'height','551px');
    // })
    let i=0;
    setInterval(()=>{
        this.rd2.setProperty(
          this.imgSlider.nativeElement,'scrollLeft',
          (this.getIndex(++this.selectIndex)*this.imgSlider.nativeElement.scrollWidth)/this.sliders.length)
      },this.intervalBySeconds*1000)
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }
  getIndex(idx:number) :number{
    return idx >=0 ? idx% this.sliders.length :this.sliders.length-(Math.abs(idx))%this.sliders.length;
  }
  handleScroll(ev){
    const ratio=(ev.target.scrollLeft*this.sliders.length)/ev.target.scrollWidth;
    this.selectIndex=Math.round(ratio);
  }

}
