import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosAllPage } from './usuarios-all.page';

describe('UsuariosAllPage', () => {
  let component: UsuariosAllPage;
  let fixture: ComponentFixture<UsuariosAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuariosAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
