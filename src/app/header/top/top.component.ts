import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.less']
})
export class TopComponent implements OnInit {

  infos = [
    {
      text: 'О проекте'
    },
    {
      text: 'Помощь'
    },
    {
      text: '|'
    },
    {
      text: 'Банковские продукты'
    },
    {
      text: 'Онлайн консультант'
    },
  ];

  languageList = [
    {
      text: 'Ўзбекча',
    },
    {
      text: 'Ozbekcha',
    },
    {
      text: 'Русский',
    },
    {
      text: 'English',
    },
  ];

  defaultLanguage: string = 'Русский'

  log(data: string): void {
    this.defaultLanguage = data
  }

  constructor() { }

  ngOnInit(): void {
  }

}
