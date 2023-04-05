import { Component, OnInit } from '@angular/core';

const inner = document.querySelector('.carousel-inner')

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{

  path: string = '../assets/gallery/forest.jpg';
  path1: string = '../assets/gallery/nature-wallpaper.jpg';


  base:string = '../../assets/gallery/'

  imgs:string[] = [
    'forest.jpg',
    'nature-wallpaper.jpg',
    'trees-3.jpg',
    'trees.jpg'
  ]

  paths2:string[] = [
    'essential-oil.jpg',
    'glass1920.jpg',
    'massage.jpg',
    'oil.jpg',
    'wellness.jpg'
  ]

  ngOnInit():void {
    for (let i = 0; i < this.imgs.length; i++) {
      const element = this.imgs[i];
      this.imgs[i] = this.base + this.imgs[i]
      console.log(this.imgs[i]);
       
      
    }
    // this.imgs.forEach((path:string) => {
    //   path = this.base + path
             
    // })
    console.log(inner?.children);

  }
}
