import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../../services/data.service";
import { Router } from "@angular/router";

interface Data{
  count: number;
  results: Array<any>;
  next: string;
  previous: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  results = [];
  count: number;
  next: string;
  previous: string;
  
  constructor(private datos: DataService, private router: Router) { }

  ngOnInit(): void {
    this.datos.getData()
    .subscribe((data: Data) => {
      console.log(data);
      this.results = data.results;
      this.count = data.count;
      this.next = data.next;
      this.previous = data.previous;
    })
  }

  irDetalle(pokemon){
    this.router.navigate(["/detalle/" + pokemon])
    .catch(e => console.log(e));
  }
}
