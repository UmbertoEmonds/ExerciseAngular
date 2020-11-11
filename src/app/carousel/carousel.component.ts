import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  pics = ["https://images.ladepeche.fr/api/v1/images/view/5f520ec68fe56f568e25cbd6/large/image.jpg", 
  "https://hms.harvard.edu/sites/default/files/Harvard%20Medicine%20Magazine/Spring2018/03_D_Llama.jpg", 
  "https://i.cbc.ca/1.5783916.1604081682!/fileImage/httpImage/image.JPG_gen/derivatives/original_780/llamas.JPG",
  "https://www.sciencealert.com/images/2020-05/processed/llama_ab_covid_1024.jpg"]

  currentPic = this.pics[0]

  constructor() {
    let i: number = 0
    setInterval(() => {
      console.log(i)
      if(i >= this.pics.length) i = 0
      this.currentPic = this.pics[i]
      i++
    }, 1000);
  }

  ngOnInit(): void {}

}