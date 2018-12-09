import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleofficeComponent } from './middleoffice.component';

describe('MiddleofficeComponent', () => {
  let component: MiddleofficeComponent;
  let fixture: ComponentFixture<MiddleofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
