import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mac-dynamic-address',
  templateUrl: './dynamic-address.component.html',
  styleUrls: ['./dynamic-address.component.scss']
})
export class DynamicAddressComponent implements OnInit {
  @Input() form!: FormGroup;

  get addresses(): FormArray {
    return this.form.controls['addresses'] as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addAddressLine();
  }

  addAddressLine(): void {
    const addressLine = this.fb.group({
      address: ['']
    });

    this.addresses.push(addressLine);
  }

}
