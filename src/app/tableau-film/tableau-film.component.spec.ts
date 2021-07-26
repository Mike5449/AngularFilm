import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauFilmComponent } from './tableau-film.component';

describe('TableauFilmComponent', () => {
  let component: TableauFilmComponent;
  let fixture: ComponentFixture<TableauFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
