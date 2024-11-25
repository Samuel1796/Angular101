import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  registration_form!: FormGroup;

  constructor(){
    this.registration_form = new FormGroup({
      first_name: new FormControl(""),
      last_name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      confirm_password: new FormControl(""),
      accept_terms: new FormControl(""),

    });

  }
  onSubmit(){
    console.log(this.registration_form.value);
  };

}
