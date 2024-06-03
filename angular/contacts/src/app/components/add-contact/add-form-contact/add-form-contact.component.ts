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
  private user: any;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    // this.fb.group({ company_name: '', job_title: '' });
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
    this.user = {
      name: this.form.get('name')?.value,
      username: this.form.get('username')?.value,
      email: this.form.get('email')?.value,
      phone: this.form.get('phone')?.value,
      company: {
        name: this.form.get('company_name')?.value,
        position: this.form.get('job_title')?.value,
      },
    };

    this.usersService.addUser(this.user);
    this.router.navigate(['list-contact']);
  }
}
