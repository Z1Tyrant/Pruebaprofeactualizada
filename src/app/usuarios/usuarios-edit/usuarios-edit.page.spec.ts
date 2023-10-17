import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosEditPage } from './usuarios-edit.page';

describe('UsuariosEditPage', () => {
  let component: UsuariosEditPage;
  let fixture: ComponentFixture<UsuariosEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuariosEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
