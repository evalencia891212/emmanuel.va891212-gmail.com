import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesModalContainerComponent } from './mes-modal-container.component';

describe('MesModalContainerComponent', () => {
  let component: MesModalContainerComponent;
  let fixture: ComponentFixture<MesModalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesModalContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
