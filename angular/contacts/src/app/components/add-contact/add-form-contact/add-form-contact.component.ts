import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-add-form-contact',
  templateUrl: './add-form-contact.component.html',
  styleUrl: './add-form-contact.component.scss',
})
export class AddFormContactComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      username: '',
      phone: '',
      email: ['', [Validators.required, Validators.email]],
      company: this.fb.group({ name: '', position: '' }),
    });
  }

  addContact() {
    this.submitted = true;
    if (this.form.valid) {
      this.usersService.addUser(this.form.value);
      this.router.navigate(['list-contact']);
    }
  }

  get formControl() {
    return this.form.controls;
  }
}
