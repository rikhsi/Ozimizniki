import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Swiper, SwiperOptions } from 'swiper';

interface banner {
  title: string,
  info: string,
  button: string,
  img: string,
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
})
export class BannerComponent implements OnInit {

  banners: banner[] = [
    {
      title: 'O’zimizniki – ваш надёжный партнер',
      info: '   Онлайн-платформа, объединяющая современные решения для фермеров: продажа и покупка товаров, модернизация вашего бизнеса. Использование площадки — это экономия вашего времени, оптимизация затрат.',
      button: 'Начать продавать',
      img: '../.../../../../assets/svg/banner.png',
    },
    {
      title: 'AgroConsult – онлайн консультант',
      info: 'Но сделанные на базе интернет-аналитики выводы, вне зависимости от их уровня, должны быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус.',
      button: 'Получить консультацию',
      img: '../.../../../../assets/svg/banner2.png'
    },
    {
      title: 'AgroBusiness – продажи на новом уровне',
      info: 'Лишь многие известные личности, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут указаны как претенденты на роль ключевых факторов.',
      button: 'Подать объявление',
      img: '../.../../../../assets/svg/banner3.png'
    },
  ]

  config: SwiperOptions = {
    autoplay: {
      delay: 10000,
    },
    pagination: {
      clickable: true,
    },
    grabCursor: true,
    breakpoints: {
      767: {
        pagination: {
          enabled: true
        },
      },
      360: {
        pagination: {
          enabled: false
        },
      }
    }
  };

  constructor() {
    SwiperCore.use([Autoplay, Pagination]);
  }

  ngOnInit(): void {

  }
}
