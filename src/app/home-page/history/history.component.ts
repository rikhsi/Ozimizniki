import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Virtual } from "swiper";
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {

  cards = [
    {
      img: '../../../assets/svg/1.png'
    },
    {
      img: '../../../assets/svg/2.png'
    },
    {
      img: '../../../assets/svg/3.png'
    },
    {
      img: '../../../assets/svg/1.png'
    },
    {
      img: '../../../assets/svg/2.png'
    },
    {
      img: '../../../assets/svg/3.png'
    },
    {
      img: '../../../assets/svg/1.png'
    },
    {
      img: '../../../assets/svg/2.png'
    },
    {
      img: '../../../assets/svg/3.png'
    },
  ]

  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {
      delay: 10000,
    },
    virtual: true,
    grabCursor: true,
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 4.7,
      },
      768: {
        slidesPerView: 3.7,
      },
      575: {
        slidesPerView: 2.8,
      },
      360: {
        slidesPerView: 1.9,
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
