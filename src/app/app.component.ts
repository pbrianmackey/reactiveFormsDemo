import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
