import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private datos:any = {};

  constructor(private httpClient: HttpClient) { }

  getData(url="https://pokeapi.co/api/v2/pokemon/"){
    return this.httpClient.get(url);
  }

  // getCountriesByRegion(region: string): Observable<any>{
  //   return this.httpClient.get<any>(`https://restcountries.eu/rest/v2/region/${region}`);
  // }

  // getCountryByName(name: string): Observable<any>{
  //   return this.httpClient.get<any>(`https://restcountries.eu/rest/v2/name/${name}`);
  // }

  // getDatos(){
  //   return this.datos;
  // }

  // setDatos(value: object){
  //   this.datos = value;
  // }
}
