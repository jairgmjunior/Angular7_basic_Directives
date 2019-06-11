import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login : "jair", role : "adimin", lastLogin: new Date('11/06/2019')},
    {login : "jon", role : "user", lastLogin: new Date('5/06/2019')},
    {login : "march", role : "adimin", lastLogin: new Date('3/06/2019')},
    {login : "rogin", role : "user", lastLogin: new Date('2/06/2019')},
  ];

  constructor() { }

  ngOnInit() {
  }

}
