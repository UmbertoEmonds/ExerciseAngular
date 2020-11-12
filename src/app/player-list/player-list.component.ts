import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players : Player[]
  player: Player

  ngOnInit(): void {
  }

  // injection de dépendance
  constructor(private joueurService: PlayerService){
    this.joueurService.getPlayer().subscribe((players: Player[]) => {
      this.players = players
    })
  }

  addPlayer(){
    //let player:Player = {}

      /*this.joueurService.postPlayer(player)
      .subscribe((player: Player) => {
        // met à jour la liste bindée pour rafraichir la vue après l'ajout
        this.players.push(player)
      })
      
      onKeyUp(event: any){
    // targent représente l'objet du DOM cible
    this.player = event.target.value
  }
      
      */
  }

  editPlayer(player:Player){
    
  }

  deletePlayer(idPlayer: number, index: number){
    this.joueurService.deletePlayer(idPlayer).subscribe(res => {
      // supprime l'element de la liste à partir de sa position et non de son identifiant (peut différer)
      this.players.splice(index, 1)
    })
  }

}
