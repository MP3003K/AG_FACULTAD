import { Component, OnInit } from '@angular/core';
import { Escuela } from './escuela';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {
  escuelas: Escuela[]=[
    {id:1,nomescuela:'sistema'},
    {id:2,nomescuela:'Ambiental'}
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
