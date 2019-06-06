import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name:String = "";
  address:String = "";
  phone:String = "";
  city:String = "";
  age:Number = 0;


  cities = [
    {name : "São Paulo", state : "SP"},
    {name : "Rio de Janeiro", state : "RJ"},
    {name : "Brasilia", state : "BR"},
    {name : "Goiânia", state : "GO"}
  ];

  clients = [];

  constructor() { }

  ngOnInit() {
  }

  save(){
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        age:this.age,
        city: this.city
      }
    );
    this.cancel();
    console.log(this.clients);
  }

  cancel(){
    this.name = "";
    this.address = "";
    this.phone = "";
    this.age = 0;
    this.city = "";
  }

  delete(i : number){
    this.clients.splice(i, 1);
  }

}
