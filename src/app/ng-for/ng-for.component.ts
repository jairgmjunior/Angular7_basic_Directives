import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
      "Ana",
      "Maria",
      "João",
      "Miguel"
  ];

  cities = [
    {name : "São Paulo", state : "SP"},
    {name : "Rio de Janeiro", state : "RJ"},
    {name : "Brasilia", state : "BR"},
    {name : "Goiânia", state : "GO"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
