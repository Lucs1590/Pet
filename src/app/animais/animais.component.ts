import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.css']
})
export class AnimaisComponent implements OnInit {
  title = 'PET!';
  PetNome = 'BJORN';
  PetRaca = 'Border Collie';
  PetDtaNasc = '25/11/2016';
  constructor() { }

  ngOnInit() {
  }

}
