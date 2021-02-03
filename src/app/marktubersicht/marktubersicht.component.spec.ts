import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarktubersichtComponent } from './marktubersicht.component';

describe('MarktubersichtComponent', () => {
  let component: MarktubersichtComponent;
  let fixture: ComponentFixture<MarktubersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarktubersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarktubersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
