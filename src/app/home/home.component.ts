import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Pet!';
  PetNome = 'BJORN';
  PetRaca = 'Boder Collie';
  PetDtaNasc = '25/11/2016';
  constructor() { }

  ngOnInit() {
  }

}
