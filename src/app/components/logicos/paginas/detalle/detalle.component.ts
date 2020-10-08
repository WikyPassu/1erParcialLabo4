import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../../services/data.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  nombrePokemon: string = "";
  pokemon: any = {};
  habilidades = new Array();
  spinner: boolean = false;

  constructor(private route: ActivatedRoute, private datos: DataService) { }

  ngOnInit(): void {
    this.spinner = true;
    setTimeout(() => {
      this.nombrePokemon = this.route.snapshot.paramMap.get("pokemon");
      this.datos.getData("https://pokeapi.co/api/v2/pokemon/" + this.nombrePokemon)
      .subscribe(poke => {
        this.pokemon = poke;
        this.pokemon.abilities.forEach(hab => {
          this.habilidades.push(hab.ability.name);
        });
        this.spinner = false;
      });  
    }, 2000);
  }

}
