import { Component } from '@angular/core';

interface Image {
  src: string,
  alt: string
}

interface Student {
  name: string,
  grade: number
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {
  count: number = 0
  students: string[] = ["Noémie", "Umberto", "Thomas"]
  color:String = "green"
  students1: Student[]= [
    {name : "Umberto", 
    grade : 5}, 
    {name: "Noémie", 
    grade: 18}, 
    {name: "Thomas", 
    grade: 10}]

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.count ++
    if (this.count == 20) this.count = 0
  }
}
