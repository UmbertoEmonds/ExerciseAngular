import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  checked1: boolean = true
  checked2: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onSlideChange($event: MatSlideToggleChange) {
    this.checked1 = !this.checked1
    this.checked2 = !this.checked2
    
    this.checked1 ? console.log(1) : console.log(0)
  }

}