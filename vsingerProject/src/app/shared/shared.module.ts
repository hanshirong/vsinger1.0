import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndexMenuComponent, FootComponent, AntCarouselComponent,RecommendCardComponent,CardTwoTemplateComponent,ImageSliderComponent,
  RecordBannerComponent,HeadTemplateComponent,MusicianCardTemplateComponent,RankCardTemplateComponent,CardPaginationComponent } from './components';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [ 
    IndexMenuComponent,
    FootComponent,
    AntCarouselComponent,
    RecommendCardComponent,
    CardTwoTemplateComponent,
    ImageSliderComponent,
    RecordBannerComponent,
    HeadTemplateComponent,
    MusicianCardTemplateComponent,
    RankCardTemplateComponent,
    CardPaginationComponent],
  imports: [CommonModule,FormsModule,NgZorroAntdModule],
  exports:[
    CommonModule,
    FormsModule,
    IndexMenuComponent,
    FootComponent,
    AntCarouselComponent,
    RecommendCardComponent,
    CardTwoTemplateComponent,
    ImageSliderComponent,
    RecordBannerComponent,
    HeadTemplateComponent,
    MusicianCardTemplateComponent,
    RankCardTemplateComponent,
    NgZorroAntdModule,
    CardPaginationComponent]
})
export class SharedModule { }
