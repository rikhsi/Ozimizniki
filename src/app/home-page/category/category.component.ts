import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {

  cards = [
    {
      img: '../../../assets/svg/tractor.svg',
      type: 'Сельхозтехника'
    },
    {
      img: '../../../assets/svg/card2.svg',
      type: 'Семена'
    },

    {
      img: '../../../assets/svg/card3.svg',
      type: 'Удобрения'
    },

    {
      img: '../../../assets/svg/card4.svg',
      type: 'Агрохимия'
    },
    {
      img: '../../../assets/svg/card8.svg',
      type: 'Спецтехника'
    },
    {
      img: '../../../assets/svg/card6.svg',
      type: 'Зерно'
    },

    {
      img: '../../../assets/svg/card7.svg',
      type: 'Сад и огород'
    },

    {
      img: '../../../assets/svg/card8.svg',
      type: 'Спецтехника'
    },
    {
      img: '../../../assets/svg/card9.svg',
      type: 'Средства защиты растений '
    },
    {
      img: '../../../assets/svg/card10.svg',
      type: 'Фермерское оборудование'
    },

    {
      img: '../../../assets/svg/card11.svg',
      type: 'Резинотехнические изделия'
    },

    {
      img: '../../../assets/svg/card12.svg',
      type: 'Все'
    },


  ]

  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      992: {
        slidesPerView: 3.6,
      },
      768: {
        slidesPerView: 2.7,
      },
      575: {
        slidesPerView: 2.2,
      },
      360: {
        slidesPerView: 1.3,
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
