import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDonoComponent } from './cadastro-dono.component';

describe('CadastroDonoComponent', () => {
  let component: CadastroDonoComponent;
  let fixture: ComponentFixture<CadastroDonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
