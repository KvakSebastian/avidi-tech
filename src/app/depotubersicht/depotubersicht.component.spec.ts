import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotubersichtComponent } from './depotubersicht.component';

describe('DepotubersichtComponent', () => {
  let component: DepotubersichtComponent;
  let fixture: ComponentFixture<DepotubersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotubersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotubersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
