import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferHistoryComponent } from './offer-history.component';

describe('OfferHistoryComponent', () => {
  let component: OfferHistoryComponent;
  let fixture: ComponentFixture<OfferHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
