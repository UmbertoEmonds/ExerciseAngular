import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flock',
  templateUrl: './flock.component.html',
  styleUrls: ['./flock.component.css']
})
export class FlockComponent implements OnInit {

  flock_selected: boolean = false
  players = ["Umberto", "Quentin", "Tina", "Loris", "Damien", "Emilie", "Lucas"]
  @Output() changeEvent = new EventEmitter<string>()

  constructor() {}

  ngOnInit(): void {}

  onClick(event: any){
    this.flock_selected = !this.flock_selected

    // retour à vide si on enleve le flock
    if(!this.flock_selected){
      this.changeEvent.emit("")
    }
  }

  onPlayerSelected(event: any, flock_selected:boolean){
    // le joueur a été séléctionné, envoi de l'evenement 
    this.changeEvent.emit(event.target.value)
  }
  
}