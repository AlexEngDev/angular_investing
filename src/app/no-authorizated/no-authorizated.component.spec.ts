import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAuthorizatedComponent } from './no-authorizated.component';

describe('NoAuthorizatedComponent', () => {
  let component: NoAuthorizatedComponent;
  let fixture: ComponentFixture<NoAuthorizatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoAuthorizatedComponent]
    });
    fixture = TestBed.createComponent(NoAuthorizatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
