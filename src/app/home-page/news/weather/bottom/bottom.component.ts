import { Component, OnInit } from '@angular/core';

interface info {
  time: string,
  gradus: string
}

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.less']
})
export class BottomComponent implements OnInit {

  infos: info[] = [
    {
      time: 'Утром',
      gradus: '+7°'
    },
    {
      time: 'Днем',
      gradus: '+13°'
    },
    {
      time: 'Вечером',
      gradus: '+3°'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
