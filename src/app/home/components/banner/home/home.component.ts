import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  mySwiper: swiper;

  constructor() {}

  ngAfterViewInit() {
    this.mySwiper = new swiper('.swiper-container');
  }
}
