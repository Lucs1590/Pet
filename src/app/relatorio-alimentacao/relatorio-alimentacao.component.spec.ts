import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioAlimentacaoComponent } from './relatorio-alimentacao.component';

describe('RelatorioAlimentacaoComponent', () => {
  let component: RelatorioAlimentacaoComponent;
  let fixture: ComponentFixture<RelatorioAlimentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioAlimentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioAlimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
