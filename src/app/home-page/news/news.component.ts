import { Component, OnInit } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  dateFormat = 'dd.MM.yyyy';

  cards = [
    {
      type: 'Узбекистан',
      title: 'Система будет постоянно развиваться и дополняться.',
      text: 'Использование площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.'
    },
    {
      type: 'Узбекистан',
      title: 'Система будет постоянно развиваться и дополняться.',
      text: 'Использование площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
