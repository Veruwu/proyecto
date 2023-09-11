import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilclientePage } from './perfilcliente.page';

describe('PerfilclientePage', () => {
  let component: PerfilclientePage;
  let fixture: ComponentFixture<PerfilclientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
