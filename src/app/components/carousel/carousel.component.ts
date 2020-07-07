import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @ViewChild(CarouselComponent) myCarousel: CarouselComponent;
  loopcomplete = false;
  slidesChangeMessage;
  itemsPerSlide = 1;
  singleSlideOffset = false;
  noWrap = true;
  activeRange = 0;

  slides = [
    {image: 'assets/slides/1.jpeg'},
    {image: 'assets/slides/2.jpeg'},
    {image: 'assets/slides/3.jpeg'},
    {image: 'assets/slides/4.jpeg'},
    {image: 'assets/slides/5.jpeg'},
    {image: 'assets/slides/6.jpeg'},
    {image: 'assets/slides/7.jpeg'},
    {image: 'assets/slides/8.jpeg'},
    {image: 'assets/slides/9.jpeg'},
    {image: 'assets/slides/10.jpeg'},
    {image: 'assets/slides/11.jpeg'},
    {image: 'assets/slides/12.jpeg'},
  ];

  selectedSlides = [
    {image: 'assets/slides/1.jpeg'},
    {image: 'assets/slides/2.jpeg'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  gotChange(): void {
    console.log('gotChange() called');
  }

  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

}
