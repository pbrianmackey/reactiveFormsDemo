import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mac-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss']
})
export class UserDetailsPageComponent implements OnInit {
  form: FormGroup;

  get user(): FormGroup {
    return this.form.controls['user'] as FormGroup;
  }
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      user: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['']
      }),
      addresses: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.subscribeToForm();
  }

  private subscribeToForm(): void {
    this.form.valueChanges.subscribe((x) => {
      console.log('form value changed');;
      console.log(x);
    });
  }

}
