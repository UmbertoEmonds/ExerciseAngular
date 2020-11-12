import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from './player';

const API = "http://localhost:3000/players/"

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // injection du service httpclient
  constructor(private http: HttpClient) { }

  getPlayer(){
    // retourne l'observable
    // pas de subscribe() ici
    return this.http.get(API)
  }

  postPlayer(player:Player){
    return this.http.post(API, player)
  }

  deletePlayer(id: number){
    const url = API + id
    return this.http.delete(url)
  }

  putPlayer(){
    
  }

}