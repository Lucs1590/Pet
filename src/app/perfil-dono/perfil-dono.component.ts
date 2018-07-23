import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-dono',
  templateUrl: './perfil-dono.component.html',
  styleUrls: ['./perfil-dono.component.css']
})
export class PerfilDonoComponent implements OnInit {
  DonoNome = "Lucas de Brito Silva";
  DonoDtaNasc = "27/04/1999";
  DonoEmail = "lucasbsilva29@gmail.com";
  DonoPass = "*****123";
  PetNome = "Bjorn";

  constructor() { }

  ngOnInit() {
  }

}
