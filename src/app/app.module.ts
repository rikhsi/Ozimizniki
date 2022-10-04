import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HomePageModule } from './home-page/home-page.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { TopComponent } from './header/top/top.component';
import { MiddleComponent } from './header/middle/middle.component';
import { BottomComponent } from './header/bottom/bottom.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { ButtonsComponent } from './header/middle/buttons/buttons.component';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopComponent,
    MiddleComponent,
    BottomComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    HomePageModule,
    NzDropDownModule,
    NzPopoverModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
