import { Component, OnInit } from '@angular/core';
import { Facultad } from './facultad';

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {
  facultades : Facultad[]=[
    {id:1,nomfacultad:'FIA'},
    {id:2,nomfacultad:'FAICET'},
    {id:3,nomfacultad:'TEOLOGIA'}
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
