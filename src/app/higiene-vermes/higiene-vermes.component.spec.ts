import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigieneVermesComponent } from './higiene-vermes.component';

describe('HigieneVermesComponent', () => {
  let component: HigieneVermesComponent;
  let fixture: ComponentFixture<HigieneVermesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigieneVermesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigieneVermesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
