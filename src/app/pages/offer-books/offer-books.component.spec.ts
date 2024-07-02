import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBooksComponent } from './offer-books.component';

describe('OfferBooksComponent', () => {
  let component: OfferBooksComponent;
  let fixture: ComponentFixture<OfferBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
