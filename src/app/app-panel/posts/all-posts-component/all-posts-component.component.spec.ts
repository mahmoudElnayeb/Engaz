import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostsComponentComponent } from './all-posts-component.component';

describe('AllPostsComponentComponent', () => {
  let component: AllPostsComponentComponent;
  let fixture: ComponentFixture<AllPostsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPostsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
