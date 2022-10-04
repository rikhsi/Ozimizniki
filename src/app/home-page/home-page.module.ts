import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CreditsComponent } from './credits/credits.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SwiperModule } from 'swiper/angular';
import { PartnersComponent } from './partners/partners.component';
import { HistoryComponent } from './history/history.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NewsComponent } from './news/news.component';
import { BlockLeftComponent } from './news/block-left/block-left.component';
import { BlockMiddleComponent } from './news/block-middle/block-middle.component';
import { WeatherComponent } from './news/weather/weather.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { TopComponent } from './news/weather/top/top.component';
import { MiddleComponent } from './news/weather/middle/middle.component';
import { BottomComponent } from './news/weather/bottom/bottom.component';
import { AdvtComponent } from './advt/advt.component';
import { BannerComponent } from './banner/banner.component';
import { FooterBannerComponent } from './footer-banner/footer-banner.component';
import { CategoryComponent } from './category/category.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';


@NgModule({
  declarations: [
    HomePageComponent,
    CreditsComponent,
    PartnersComponent,
    HistoryComponent,
    NewsComponent,
    BlockLeftComponent,
    BlockMiddleComponent,
    WeatherComponent,
    TopComponent,
    MiddleComponent,
    BottomComponent,
    AdvtComponent,
    BannerComponent,
    FooterBannerComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzButtonModule,
    SwiperModule,
    NzCardModule,
    NzDropDownModule,
    NzModalModule,
    NzAutocompleteModule,
    NzCollapseModule
  ]
})
export class HomePageModule { }
