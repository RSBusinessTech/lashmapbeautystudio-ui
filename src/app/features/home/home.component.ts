import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 slideshowImages: string[] = [
    'assets/slideshow/slideShowImage1.png',
    'assets/slideshow/slideShowImage2.png',
    'assets/slideshow/slideShowImage3.png',
    'assets/slideshow/slideShowImage4.png',
    'assets/slideshow/slideShowImage5.png',
    'assets/slideshow/slideShowImage6.png'
  ];
  currentImageIndex = 0;
  private intervalId: any;
  constructor() { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.slideshowImages.length;
    }, 4000); // Change image every 2 seconds
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
