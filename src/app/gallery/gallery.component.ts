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
    'forest1080.jpg',
    'nature-wallpaper1080.jpg',
    'trees1080.jpg',
    'trees.jpg', // sima trees.jpgbol 1080

    'essential-oil.jpg',
    'glass1920.jpg',
    'massage.jpg',
    'oil.jpg',

    'butterbur.jpg',
    'wellness.jpg',
    'clover.jpg',
    'flower.jpg'
  ]

  ngOnInit():void {
    for (let i = 0; i < this.imgs.length; i++) {
      const element = this.imgs[i];
      this.imgs[i] = this.base + this.imgs[i]
    }
  }
}
