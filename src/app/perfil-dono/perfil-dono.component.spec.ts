import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDonoComponent } from './perfil-dono.component';

describe('PerfilDonoComponent', () => {
  let component: PerfilDonoComponent;
  let fixture: ComponentFixture<PerfilDonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
