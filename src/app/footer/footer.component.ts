import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  mediaIcons = [
    {
      icon: '../../assets/svg/Facebook.svg'
    },
    {
      icon: '../../assets/svg/Instagram.svg'
    },
    {
      icon: '../../assets/svg/Telegram.svg'
    }
  ];

  appMarket = [
    {
      img: '../../assets/svg/google.svg'
    },
    {
      img: '../../assets/svg/appstore.svg'
    }
  ];

  support = [
    {
      title: 'Колл-центр:',
      info: ' +998 (78) 150–00–88'
    },
    {
      title: ' Telegram Bot:',
      info: 'On-line Support'
    }
  ];

  rightsList = [
    {
      text: '2005–2020 © Все права защищены. Все услуги лицензированы'
    },
    {
      text: 'Акционерный коммерческий банк «Агробанк» зарегистрирован 29 августа 2014 года Центральным банком Республики Узбекистан под номером 78'
    }
  ];

  privacyList = [
    {
      text: 'Пользовательское соглашение'
    },
    {
      text: 'Политика в отношении обработки персональных данных'
    }
  ];

  usefulLinks = [
    {
      text: 'Партнерство'
    },
    {
      text: 'Популярные вопросы'
    },
    {
      text: 'Как работает сервис'
    }
  ];

  aboutUs = [
    {
      text: 'О проекте'
    },
    {
      text: 'Новости / Блог'
    },
    {
      text: 'Контакты'
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
