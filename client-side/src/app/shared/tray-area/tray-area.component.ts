import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'tray-area',
  templateUrl: './tray-area.component.html',
  styleUrls: ['./tray-area.component.scss']
})
export class TrayAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  defaultImage = 'https://www.placecage.com/1000/1000';
  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';

  slides = [
    { img: "./../../../assets/previews/593669-v.webp" },
   
  ];

  slideConfig = {
    // slidesToShow: 8.5,
    slidesToScroll: 8,
    infinite: false,
    arrows: true,
    center: false,
    autoplay: false,
    autoplaySpeed: 2000,
    variableWidth: true,
    prevArrow: "<i class='previous-arrow'></i>",
    nextArrow: "<i class='next-arrow'></i>"
  };
}
