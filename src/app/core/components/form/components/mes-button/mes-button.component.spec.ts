import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesButtonComponent } from './mes-button.component';

describe('MesButtonComponent', () => {
  let component: MesButtonComponent;
  let fixture: ComponentFixture<MesButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
