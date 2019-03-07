import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alimentacao',
  templateUrl: './alimentacao.component.html',
  styleUrls: ['./alimentacao.component.css']
})
export class AlimentacaoComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  Data = '16/08/2018';

  toReport() {
    this._router.navigate(['/relatorio-alimentacao']);
  }

}
