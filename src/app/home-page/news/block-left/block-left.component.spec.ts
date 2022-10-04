import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockLeftComponent } from './block-left.component';

describe('BlockLeftComponent', () => {
  let component: BlockLeftComponent;
  let fixture: ComponentFixture<BlockLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
