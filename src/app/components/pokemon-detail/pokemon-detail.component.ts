import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { PokemonDetail } from '../../models/pokemon.detail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: PokemonDetail;
  imagePokemon: boolean;
  color: string;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { 
    this.pokemon = data.pokemon;
    this.imagePokemon = data.imagePokemon;
  }

  ngOnInit(): void {
  }


  getAbilities(): string {
    return this.pokemon.abilities.map(x => x.ability.name).join(', ');
  }

  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
    
  }

}
