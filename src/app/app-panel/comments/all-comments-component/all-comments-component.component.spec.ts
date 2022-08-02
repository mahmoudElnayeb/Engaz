import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommentsComponentComponent } from './all-comments-component.component';

describe('AllCommentsComponentComponent', () => {
  let component: AllCommentsComponentComponent;
  let fixture: ComponentFixture<AllCommentsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCommentsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCommentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
