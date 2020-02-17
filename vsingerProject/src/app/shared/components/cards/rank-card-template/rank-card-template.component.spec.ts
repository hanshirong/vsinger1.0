import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankCardTemplateComponent } from './rank-card-template.component';

describe('RankCardTemplateComponent', () => {
  let component: RankCardTemplateComponent;
  let fixture: ComponentFixture<RankCardTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankCardTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
