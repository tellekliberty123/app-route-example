import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSharedComponent } from './lib-shared.component';

describe('LibSharedComponent', () => {
  let component: LibSharedComponent;
  let fixture: ComponentFixture<LibSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
