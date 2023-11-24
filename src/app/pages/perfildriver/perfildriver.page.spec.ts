import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfildriverPage } from './perfildriver.page';

describe('PerfildriverPage', () => {
  let component: PerfildriverPage;
  let fixture: ComponentFixture<PerfildriverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfildriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
