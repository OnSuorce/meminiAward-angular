import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAwardComponent } from './create-award.component';

describe('CreateAwardComponent', () => {
  let component: CreateAwardComponent;
  let fixture: ComponentFixture<CreateAwardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAwardComponent]
    });
    fixture = TestBed.createComponent(CreateAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
