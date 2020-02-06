import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AntCarouselComponent } from './ant-carousel.component';

describe('AntCarouselComponent', () => {
  let component: AntCarouselComponent;
  let fixture: ComponentFixture<AntCarouselComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AntCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
