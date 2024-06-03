import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrl: './list-contacts.component.scss',
})
export class ListContactsComponent {
  public users: any[] = this.usersService.getUsers();

  constructor(public usersService: UsersService) {}
}
