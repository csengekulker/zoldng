import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit{

  info = [
    {
      text: "Gyakran Ismételt Kérdések",
      ref: "faq",
    },
    {
      text: "Árlista",
      ref: "pricing",
    },
    {
      text: "Dokumentumok",
      ref: "docs"
    },
    {
      text: "Tanúsítványok",
      ref:  "certs"
    },
    {
      text: "Licensz",
      ref: "license"
    }
    
  ]

  ngOnInit(): void { }

}
