import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  @Input({ required: true }) solicitarImage: string = '';
  @Output() clickPokemon = new EventEmitter<number>();
  previousPokemon(){
    this.clickPokemon.emit(-1)
  }

  nextPokemon(){
    this.clickPokemon.emit(1)
  }
}
