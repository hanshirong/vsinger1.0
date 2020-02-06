import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTwoTemplateComponent } from './card-two-template.component';

describe('CardTwoTemplateComponent', () => {
  let component: CardTwoTemplateComponent;
  let fixture: ComponentFixture<CardTwoTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTwoTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTwoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
