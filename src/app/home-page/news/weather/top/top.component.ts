import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.less']
})
export class TopComponent implements OnInit {

  isVisibleTop = false;
  isVisibleMiddle = false;


  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }

  default: string = 'Ташкент';

  log(data: string): void {
    this.default = data
  }
  inputValue?: string;
  options: string[] = [
    'Ташкент',
    'Андижан',
    'Ташкент',
    'Андижан',
    'Ташкент',
    'Андижан',
    'Ташкент',
    'Андижан',
  ];

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options = value ? [value, value + value, value + value + value] : [];
  }

  panels = [
    {
      active: false,
      name: 'Андижанская область',
      towns: [
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
      ]
    },
    {
      active: false,
      name: 'Андижанская область',
      towns: [
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
      ]
    },
    {
      active: false,
      name: 'Андижанская область',
      towns: [
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
      ]
    },
    {
      active: false,
      name: 'Андижанская область',
      towns: [
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
      ]
    },
    {
      active: false,
      name: 'Андижанская область',
      towns: [
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
      ]
    },
    {
      active: false,
      name: 'Андижанская область',
      towns: [
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
        {
          name: 'Чирчик'
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
