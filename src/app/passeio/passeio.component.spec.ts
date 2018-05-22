import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseioComponent } from './passeio.component';

describe('PasseioComponent', () => {
  let component: PasseioComponent;
  let fixture: ComponentFixture<PasseioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasseioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasseioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
