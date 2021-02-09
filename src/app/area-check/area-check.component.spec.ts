import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCheckComponent } from './area-check.component';

describe('AreaCheckComponent', () => {
  let component: AreaCheckComponent;
  let fixture: ComponentFixture<AreaCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
