import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneNewsComponent } from './show-one-news.component';

describe('ShowOneNewsComponent', () => {
  let component: ShowOneNewsComponent;
  let fixture: ComponentFixture<ShowOneNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowOneNewsComponent]
    });
    fixture = TestBed.createComponent(ShowOneNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
