import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

interface card {
  img: string,
  type: string,
  name: string,
  value: string,
  company: string,
  isAdded: boolean
}

@Component({
  selector: 'app-advt',
  templateUrl: './advt.component.html',
  styleUrls: ['./advt.component.less']
})
export class AdvtComponent implements OnInit {

  isAdded(card: card) {
    card.isAdded = !card.isAdded
  }

  cards: card[] = [
    {
      img: '../../../assets/svg/img.png',
      type: 'Сельхозтехника',
      name: 'Кормоуборочный комбайн RSM F 2650',
      value: '659 875 сум',
      company: 'ОАО “Вымпел”, Нурата',
      isAdded: false
    },
    {
      img: '../../../assets/svg/advt2.png',
      type: 'Сельхозтехника',
      name: 'Кормоуборочный комбайн RSM F 2650',
      value: '659 875 сум',
      company: 'ОАО “Вымпел”, Нурата',
      isAdded: false
    },
    {
      img: '../../../assets/svg/advt3.png',
      type: 'Сельхозтехника',
      name: 'Кормоуборочный комбайн RSM F 2650',
      value: '659 875 сум',
      company: 'ОАО “Вымпел”, Нурата',
      isAdded: false
    },
    {
      img: '../../../assets/svg/advt4.png',
      type: 'Сельхозтехника',
      name: 'Кормоуборочный комбайн RSM F 2650',
      value: '659 875 сум',
      company: 'ОАО “Вымпел”, Нурата',
      isAdded: false
    },
    {
      img: '../../../assets/svg/advt5.png',
      type: 'Сельхозтехника',
      name: 'Кормоуборочный комбайн RSM F 2650',
      value: '659 875 сум',
      company: 'ОАО “Вымпел”, Нурата',
      isAdded: false
    },
    {
      img: '../../../assets/svg/advt6.png',
      type: 'Сельхозтехника',
      name: 'Кормоуборочный комбайн RSM F 2650',
      value: '659 875 сум',
      company: 'ОАО “Вымпел”, Нурата',
      isAdded: false
    },
    {
      img: '../../../assets/svg/advt7.png',
      type: 'Сельхозтехника',
      name: 'Кормоуборочный комбайн RSM F 2650',
      value: '659 875 сум',
      company: 'ОАО “Вымпел”, Нурата',
      isAdded: false
    },
    {
      img: '../../../assets/svg/advt8.png',
      type: 'Сельхозтехника',
      name: 'Кормоуборочный комбайн RSM F 2650',
      value: '659 875 сум',
      company: 'ОАО “Вымпел”, Нурата',
      isAdded: false
    },
    {
      img: '../../../assets/svg/advt7.png',
      type: 'Сельхозтехника',
      name: 'Кормоуборочный комбайн RSM F 2650',
      value: '659 875 сум',
      company: 'ОАО “Вымпел”, Нурата',
      isAdded: false
    },
    {
      img: '../../../assets/svg/advt8.png',
      type: 'Сельхозтехника',
      name: 'Кормоуборочный комбайн RSM F 2650',
      value: '659 875 сум',
      company: 'ОАО “Вымпел”, Нурата',
      isAdded: false
    },
  ];


  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3.2,
      },
      575: {
        slidesPerView: 2.3,
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
