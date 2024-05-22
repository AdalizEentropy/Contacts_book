import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss',
})
export class HeadComponent {
  public totalUsers: number | undefined = this.usersService.getTotalUsers();

  constructor(public usersService: UsersService) {}
}
