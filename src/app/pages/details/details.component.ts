import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  public pokemon: any;


  constructor(
    private ActivatedRoute: ActivatedRoute,
    private PokeApiService: PokeApiService ){ }

  ngOnInit(): void {
    this.getPokemon;
  }
get getPokemon(){
  const id = this.ActivatedRoute.snapshot.params['id'];
  const pokemon = this.PokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`);
  const name = this.PokeApiService.apiGetPokemon(`${this.urlName}/${id}`);

  return forkJoin([pokemon,name]).subscribe(
    res=>{
      this.pokemon=res;
    }
  );

}
}
