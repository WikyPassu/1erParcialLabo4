import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData(url="https://pokeapi.co/api/v2/pokemon/"){
    return this.httpClient.get(url);
  }

  getAbilitieData(url){
    return this.httpClient.get(url);
  }
}
