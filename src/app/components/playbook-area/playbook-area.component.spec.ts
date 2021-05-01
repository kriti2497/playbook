import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybookAreaComponent } from './playbook-area.component';

describe('PlaybookAreaComponent', () => {
  let component: PlaybookAreaComponent;
  let fixture: ComponentFixture<PlaybookAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybookAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybookAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
