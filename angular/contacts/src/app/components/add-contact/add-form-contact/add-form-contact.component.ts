import { FormBuilder, FormGroup } from '@angular/forms';
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
      name: '',
      username: '',
      phone: '',
      email: '',
      company_name: '',
      job_title: '',
    });
  }

  addContact() {
    this.usersService.addUser(this.form.value);
    this.router.navigate(['list-contact']);
  }
}
