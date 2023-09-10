import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterbasePage } from './registerbase.page';

describe('RegisterbasePage', () => {
  let component: RegisterbasePage;
  let fixture: ComponentFixture<RegisterbasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterbasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
