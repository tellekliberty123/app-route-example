import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { debounceTime, takeUntil } from 'rxjs/operators';

import { BaseFormComponent } from '../base-from/base-form.component';
import { from, Subject } from 'rxjs';

@Component({
  selector: 'lib-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends BaseFormComponent implements OnInit, OnDestroy {
  public customerSignupForm: FormGroup;

  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder) {
    super();
   }

   ngOnInit() {
     this.createFormGroup();
   }

   ngOnDestroy() {
     this.ngUnsubscribe.next(true);
     this.ngUnsubscribe.complete();
     this.ngUnsubscribe.unsubscribe();
   }

  protected createFormGroup(): void {
    this.customerSignupForm = this.fb.group({
      firstName: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ]
      ],
      lastName: { value: 'n/a', disabled: true },
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      notification: 'email'
    });

    this.customerSignupForm.valueChanges.pipe(
      takeUntil(this.ngUnsubscribe),
      debounceTime(1000)
    ).subscribe(controls => {
      this.setNotification();
    });

    // alternative to FormBuilder. Use FormBuilder instead
    // new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl()
    // });
  }

  save(): void {
    console.log('customerSignupForm is valid', this.customerSignupForm.valid);
    console.log('customerSignupForm is touched', this.customerSignupForm.touched);
    console.log('customerSignupForm value', this.customerSignupForm.value);
  }

  setValues(): void {
    this.customerSignupForm.reset();
    this.customerSignupForm.setValue({
      firstName: 'Tellek',
      lastName: 'Liberty123',
      email: 'tellek.liberty@gmail.com',
      phone: '',
      notification: 'email'
    });
  }

  patchValues(): void {
    this.customerSignupForm.reset();
    this.customerSignupForm.patchValue({
      email: 'thomas.juson@gmail.com'
    });
  }

  // a better way is to subscribe to phone control valueChanges
  setNotification(): void {
    const notificationControl = this.customerSignupForm.get('notification');
    const phoneControl = this.customerSignupForm.get('phone');
    if (!phoneControl) {
      return;
    }
    if (notificationControl.value === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}
