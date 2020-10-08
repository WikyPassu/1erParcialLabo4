import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  menuItems: MenuItem[] = [
    {
      texto: "Inicio",
      ruta: ""
    },
    {
      texto: "Ruta1",
      ruta: "ruta1"
    },
    {
      texto: "Ruta2",
      ruta: "ruta2"
    },
    {
      texto: "Ruta3",
      ruta: "ruta3"
    },
    {
      texto: "Ruta4",
      ruta: "ruta4"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
