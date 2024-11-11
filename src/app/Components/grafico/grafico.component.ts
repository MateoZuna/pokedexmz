import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [NgIf],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  nombrePokemon: string = "Psyduck"
  vidaPokemon: number = 100; 
  tipoPokemon: string = "Agua";
  ataquePokemon: number = 175;
  defensaPokemon: number = 100;
}
