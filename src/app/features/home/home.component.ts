import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  @ViewChild('heroVideo', { static: false }) heroVideo!: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const video = this.heroVideo.nativeElement;
    video.muted = true;   // ensure muted property is set programmatically
    video.play().catch(error => {
      console.warn('Video play was prevented:', error);
    });
  }
}
