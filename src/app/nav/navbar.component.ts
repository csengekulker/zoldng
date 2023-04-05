import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavigationComponent implements OnInit {
  buttons!: string[][]

  ngOnInit(): void {

    this.buttons = [
      [
        'Főoldal',
        ''
      ],
      [
        'Masszázsok',
        '/services'
      ],
      [
        'Foglalás',
        '/booking'
      ],
      [
        'Galéria',
        '/gallery'
      ]
    ]
  }

}
