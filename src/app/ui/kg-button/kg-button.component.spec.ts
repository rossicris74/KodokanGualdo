import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KgButtonComponent } from './kg-button.component';

describe('KgButtonComponent', () => {
  let component: KgButtonComponent;
  let fixture: ComponentFixture<KgButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KgButtonComponent]
    });
    fixture = TestBed.createComponent(KgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
