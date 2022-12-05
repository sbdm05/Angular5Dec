import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddOrComponent } from './page-add-or.component';

describe('PageAddOrComponent', () => {
  let component: PageAddOrComponent;
  let fixture: ComponentFixture<PageAddOrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddOrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddOrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
