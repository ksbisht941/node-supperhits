import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'masthead-area',
  templateUrl: './masthead-area.component.html',
  styleUrls: ['./masthead-area.component.scss']
})
export class MastheadAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  defaultImage = 'https://www.placecage.com/1000/1000';
  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';

  slides = [
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" },
    { img: "./../../../assets/previews/593669-v.webp" }
  ];

  slideConfig = {
    // slidesToShow: 8.5,
    // slidesToScroll: 1,
    infinite: true,
    arrows: true,
    center: true,
    autoplay: false,
    autoplaySpeed: 2000,
    variableWidth: true,
    prevArrow: "<button type='button' data-role='none' class='slick-arrow slick-prev' style='display: block;'><i class='previous-arrow'></i></button>",
    nextArrow: "<button type='button' data-role='none' class='slick-arrow slick-next' style='display: block;'><i class='next-arrow'></i></button>"
  };

}
