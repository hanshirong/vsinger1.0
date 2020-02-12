import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { IndexMenuComponent } from './components/index-menu/index-menu.component';
import { FootComponent } from './components/foot/foot.component';

import { AntCarouselComponent } from './components/ant-carousel/ant-carousel.component';
import { RecommendCardComponent } from './components/cards/recommend-card/recommend-card.component';
import { CardTwoTemplateComponent } from './components/cards/card-two-template/card-two-template.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { RecordBannerComponent } from './components/record-banner/record-banner.component';
import { HeadTemplateComponent } from './components/cards/head-template/head-template.component';
import { MusicianCardTemplateComponent } from './components/cards/musician-card-template/musician-card-template.component';
import { RankCardTemplateComponent } from './components/cards/rank-card-template/rank-card-template.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    IndexMenuComponent,
    FootComponent,

    AntCarouselComponent,

    RecommendCardComponent,

    CardTwoTemplateComponent,

    ImageSliderComponent,

    RecordBannerComponent,

    HeadTemplateComponent,

    MusicianCardTemplateComponent,

    RankCardTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
