import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhcontentComponent } from './phcontent.component';

describe('PhcontentComponent', () => {
  let component: PhcontentComponent;
  let fixture: ComponentFixture<PhcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
