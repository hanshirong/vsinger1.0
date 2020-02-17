import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianCardTemplateComponent } from './musician-card-template.component';

describe('MusicianCardTemplateComponent', () => {
  let component: MusicianCardTemplateComponent;
  let fixture: ComponentFixture<MusicianCardTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianCardTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
