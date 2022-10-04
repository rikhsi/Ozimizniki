import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.less']
})
export class ButtonsComponent implements OnInit {
  isEnter: boolean = false;

  popoverList = [
    {
      img: '../../../assets/svg/popover1.svg',
      text: 'Объявления'
    },
    {
      img: '../../../assets/svg/popver2.svg',
      text: 'Сообщения'
    },
    {
      img: '../../../assets/svg/popver3.svg',
      text: 'Избранное'
    },
    {
      img: '../../../assets/svg/popver4.svg',
      text: 'Настройки'
    },
    {
      img: '../../../assets/svg/popver5.svg',
      text: 'Выйти'
    },
  ];


  enter() {
    this.isEnter = !this.isEnter
  }

  quit(index: number) {
    if (index === 4) {
      this.isEnter = !this.isEnter
    }
    console.log(index);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
