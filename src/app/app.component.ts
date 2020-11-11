import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Mon premier projet'
  pText: string = "Mon paragraphe"

  player: string = ""

  image = {
    src: "https://images.ladepeche.fr/api/v1/images/view/5f520ec68fe56f568e25cbd6/large/image.jpg?v=1",
    alt: "Un beau lama"
  }

  constructor(){}

  updateUI(){
    this.title = "Coucou"
    this.image.src = "https://cdn-s-www.estrepublicain.fr/images/26D9AA3D-9674-4C67-A6CF-0C4ADF871E14/MF_contenu/naissance-de-chacana-une-petite-femelle-lama-1574089656.jpg"
    this.image.alt = "Un bébé lama"
  }

  onPlayerSelected(event: any){
    this.player = event
  }

}