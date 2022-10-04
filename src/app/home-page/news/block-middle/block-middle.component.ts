import { Component, OnInit } from '@angular/core';

interface card {
  type: string,
  title: string,
  subTitle: string
}

@Component({
  selector: 'app-block-middle',
  templateUrl: './block-middle.component.html',
  styleUrls: ['./block-middle.component.less']
})
export class BlockMiddleComponent implements OnInit {

  cards: card[] = [
    {
      type: 'Узбекистан',
      title: 'Система будет постоянно развиваться и дополняться.',
      subTitle: 'Использование площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.'
    },
    {
      type: 'Мир',
      title: 'Система будет постоянно развиваться и дополняться.',
      subTitle: 'Использование площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
