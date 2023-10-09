import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajedisPage } from './viajedis.page';

describe('ViajedisPage', () => {
  let component: ViajedisPage;
  let fixture: ComponentFixture<ViajedisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajedisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
