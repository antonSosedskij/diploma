import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiScanComponent } from './ai-scan.component';

describe('AiScanComponent', () => {
  let component: AiScanComponent;
  let fixture: ComponentFixture<AiScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiScanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
