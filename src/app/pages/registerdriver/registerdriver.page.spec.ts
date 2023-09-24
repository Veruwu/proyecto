import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterdriverPage } from './registerdriver.page';

describe('RegisterdriverPage', () => {
  let component: RegisterdriverPage;
  let fixture: ComponentFixture<RegisterdriverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterdriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
