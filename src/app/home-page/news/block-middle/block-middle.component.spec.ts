import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockMiddleComponent } from './block-middle.component';

describe('BlockMiddleComponent', () => {
  let component: BlockMiddleComponent;
  let fixture: ComponentFixture<BlockMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
