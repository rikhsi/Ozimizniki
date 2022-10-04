import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.less']
})
export class MiddleComponent implements OnInit {

  defaultLanguage: string = 'Русский'

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

  log(data: string): void {
    this.defaultLanguage = data
  }

  constructor() { }

  ngOnInit(): void {
  }

}
