import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilmeComponent } from './lista-filme.component';

describe('ListaFilmeComponent', () => {
  let component: ListaFilmeComponent;
  let fixture: ComponentFixture<ListaFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
