import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-alimentacao',
  templateUrl: './alimentacao.component.html',
  styleUrls: ['./alimentacao.component.css']
})
export class AlimentacaoComponent implements OnInit {

  Data = this.DateToStr(new Date());
  constructor(private _router: Router) { }
  ngOnInit() {
  }

  toReport() {
    this._router.navigate(['/relatorio-alimentacao']);
  }

  DateToStr(data: Date) {
    const dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'),
      ano = data.getFullYear();
    return dia + '/' + mes + '/' + ano;
  }
}
