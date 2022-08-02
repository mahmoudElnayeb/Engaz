import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostControlComponentComponent } from './post-control-component.component';

describe('PostControlComponentComponent', () => {
  let component: PostControlComponentComponent;
  let fixture: ComponentFixture<PostControlComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostControlComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostControlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
