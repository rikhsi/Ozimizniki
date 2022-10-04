import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.less']
})
export class CreditsComponent implements OnInit {

  cards = [
    {
      title: '  Кредит на покупку агротехники, 23% годовых',
      img: '../../../assets/svg/tractor.png'
    },
    {
      title: 'Кредит на защиту растений',
      img: '../../../assets/svg/flor.png'
    },
    {
      title: 'Кредит на защиту растений',
      img: '../../../assets/svg/flor.png'
    },
    {
      title: '  Кредит на покупку агротехники, 23% годовых',
      img: '../../../assets/svg/tractor.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
