import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Virtual } from "swiper";
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

export interface card {
  img: string,
  type?: string
}

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.less']
})
export class PartnersComponent implements OnInit {

  cards = [
    {
      img: '../../../assets/svg/artLogo.svg'
    },
    {
      img: '../../../assets/svg/farmers.svg'
    },
    {
      img: '../../../assets/svg/agro.svg'
    },
    {
      img: '../../../assets/svg/town.svg'
    },
    {
      img: '../../../assets/svg/andijon.svg'
    },
    {
      img: '../../../assets/svg/artLogo.svg'
    },
    {
      img: '../../../assets/svg/farmers.svg'
    },
    {
      img: '../../../assets/svg/agro.svg'
    },
    {
      img: '../../../assets/svg/town.svg'
    },
    {
      img: '../../../assets/svg/andijon.svg'
    },
  ]

  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {
      delay: 10000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4.3,
      },
      768: {
        slidesPerView: 3.5,
      },
      575: {
        slidesPerView: 3.1,
      },
      360: {
        slidesPerView: 2,
      }
    }
  };

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    this.swiper?.swiperRef.slideNext(500);
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(500);
  }

  constructor() { }

  ngOnInit(): void {
    SwiperCore.use([Autoplay, Virtual]);
  }
}
