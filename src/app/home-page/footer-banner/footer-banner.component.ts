import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-footer-banner',
  templateUrl: './footer-banner.component.html',
  styleUrls: ['./footer-banner.component.less'],
})
export class FooterBannerComponent implements OnInit {

  banners = [
    {
      title: 'Скачайте уникальное мобильное приложение O’zimizniki',
      img: '../../../assets/svg/footerimg.png'
    },
    {
      title: 'Скачайте уникальное мобильное приложение O’zimizniki',
      img: '../../../assets/svg/footerimg.png'
    },
    {
      title: 'Скачайте уникальное мобильное приложение O’zimizniki',
      img: '../../../assets/svg/footerimg.png'
    },
  ];

  list = [
    {
      li: 'Самый большой каталог поставщиков продукции и услуг',
      icon: '../../../assets/svg/catalog.svg'
    },
    {
      li: 'Незаменимый помощник и удобные сервисы в одном месте',
      icon: '../../../assets/svg/helper.svg'
    },
    {
      li: 'Дополнительные финансовые возможности напрямую от Агробанка ',
      icon: '../../../assets/svg/finance.svg'
    }
  ];

  appMarket = [
    {
      img: '../../../assets/svg/footerGooglePlay.svg'
    },
    {
      img: '../../../assets/svg/footerAppStore.svg'
    }
  ]


  config: SwiperOptions = {
    autoplay: {
      delay: 10000,
    },
    grabCursor: true,
    pagination: {
      clickable: true,
      enabled: true
    },
  };

  constructor() { }

  ngOnInit(): void {
    SwiperCore.use([Autoplay, Pagination]);
  }

}
