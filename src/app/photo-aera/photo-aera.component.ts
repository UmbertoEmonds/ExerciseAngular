import { Component, Input, OnInit } from '@angular/core';
import { FlockComponent } from '../flock/flock.component';

@Component({
  selector: 'app-photo-aera',
  templateUrl: './photo-aera.component.html',
  styleUrls: ['./photo-aera.component.css']
})
export class PhotoAeraComponent implements OnInit {

  constructor() {}

  thumbs:string[] = ["../assets/1.jpg", "../assets/2.jpg", "../assets/3.jpg", "../assets/4.jpg"]
  photo_aera:string = this.thumbs[0]

  @Input() player: string = ""

  ngOnInit(): void {}

  onClick(event: any, index:number){
    this.photo_aera = this.thumbs[index]
  }

}
