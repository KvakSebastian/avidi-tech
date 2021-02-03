import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotubersichtInfoComponent } from './depotubersicht-info.component';

describe('DepotubersichtInfoComponent', () => {
  let component: DepotubersichtInfoComponent;
  let fixture: ComponentFixture<DepotubersichtInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotubersichtInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotubersichtInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
