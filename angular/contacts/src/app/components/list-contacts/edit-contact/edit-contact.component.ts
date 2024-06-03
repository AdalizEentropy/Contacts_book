import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.scss',
})
export class EditContactComponent implements OnInit {
  public form: FormGroup;
  private userId: number;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initUserId();
    this.initForm();
  }

  initUserId() {
    this.route.params.subscribe(({ id }) => (this.userId = +id));
  }

  initForm() {
    this.form = this.fb.group({
      name: '',
      username: '',
      phone: '',
      email: '',
      company: this.fb.group({ name: '', position: '' }),
    });

    this.form.patchValue(this.usersService.getUser(this.userId));
  }

  updateUser() {
    this.usersService.updateUser(this.userId, this.form.value);
    this.router.navigate(['list-contact']);
  }
}
