import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormComponent } from './base-form.component';

@Component({
  selector: 'lib-test-component',
  template: `
    <form novalidate [formGroup]="formGroup">
      <input type="text"
             formControlName="firstName" />
    </form>
  `
})
class TestComponent extends BaseFormComponent implements OnInit {
  public formGroup: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
    this.createFormGroup();
  }

  protected createFormGroup(): void {
    this.formGroup = new FormGroup({
      firstName: new FormControl('Tellek Liberty')
    });
  }
}
describe('BaseFormComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule],
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form group', () => {
    component.ngOnInit();
    expect(component.formGroup).toBeTruthy('formGroup was not created.');
  });
});
