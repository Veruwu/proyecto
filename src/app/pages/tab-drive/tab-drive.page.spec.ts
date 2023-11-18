import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabDrivePage } from './tab-drive.page';

describe('TabDrivePage', () => {
  let component: TabDrivePage;
  let fixture: ComponentFixture<TabDrivePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabDrivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
