import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { debounceTime, takeUntil } from 'rxjs/operators';

import { BaseFormComponent } from '../base-from/base-form.component';
import { Subject } from 'rxjs';

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
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      notification: 'email'
    });

    const notificationControl = this.customerSignupForm.get('notification');
    notificationControl.valueChanges.pipe(
      takeUntil(this.ngUnsubscribe),
      debounceTime(1000)
    ).subscribe(control => {
      this.setNotification(control);
    });

    // alternative to FormBuilder. Use FormBuilder instead
    // new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl()
    // });
  }

  get firstName() {
    return this.customerSignupForm.get('firstName');
  }

  get lastName() {
    return this.customerSignupForm.get('lastName');
  }

  save(): void {
    console.log('customerSignupForm is valid', this.customerSignupForm.valid);
    console.log('customerSignupForm is touched', this.customerSignupForm.touched);
    console.log('customerSignupForm value', this.customerSignupForm.value);
    console.log('lastName value', this.lastName.value);
    console.log('firstName errors', this.firstName.errors);
    console.log('lastName errors', this.lastName.errors);
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
  setNotification(control: string): void {
    const phoneControl = this.customerSignupForm.get('phone');
    if (!phoneControl) {
      return;
    }
    if (control === 'text') {
      phoneControl.setValidators([Validators.required, Validators.minLength(10)]);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}
