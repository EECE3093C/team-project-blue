import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthContainerComponent } from './user-auth-container.component';

describe('UserAuthContainerComponent', () => {
  let component: UserAuthContainerComponent;
  let fixture: ComponentFixture<UserAuthContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuthContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAuthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
