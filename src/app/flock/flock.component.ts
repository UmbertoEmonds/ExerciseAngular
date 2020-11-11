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
  @Output() isFlock = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit(): void {}

  onClick(event: any){
    this.flock_selected = !this.flock_selected

    // envoyer la première valeur sélectionnée par défaut
    if(this.flock_selected){
      this.changeEvent.emit(this.players[0])
    } else this.changeEvent.emit("")
  }

  onPlayerSelected(event: any, flock_selected:boolean){
    // le joueur a été séléctionné, envoi de l'evenement 
    this.changeEvent.emit(event.target.value)
  }
  
}