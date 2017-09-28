import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBoardComponent } from './room-board.component';

describe('RoomBoardComponent', () => {
  let component: RoomBoardComponent;
  let fixture: ComponentFixture<RoomBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
