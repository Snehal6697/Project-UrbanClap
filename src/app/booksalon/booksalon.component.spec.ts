import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksalonComponent } from './booksalon.component';

describe('BooksalonComponent', () => {
  let component: BooksalonComponent;
  let fixture: ComponentFixture<BooksalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
