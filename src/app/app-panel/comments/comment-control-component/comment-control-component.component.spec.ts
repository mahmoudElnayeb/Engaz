import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentControlComponentComponent } from './comment-control-component.component';

describe('CommentControlComponentComponent', () => {
  let component: CommentControlComponentComponent;
  let fixture: ComponentFixture<CommentControlComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentControlComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentControlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
