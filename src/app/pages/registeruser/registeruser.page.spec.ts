import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisteruserPage } from './registeruser.page';

describe('RegisteruserPage', () => {
  let component: RegisteruserPage;
  let fixture: ComponentFixture<RegisteruserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisteruserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
