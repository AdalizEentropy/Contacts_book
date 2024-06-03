import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss',
})
export class HeadComponent {
  public totalUsers: number;

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.totalUsers = this.usersService.getTotalUsers();
    }, 1000);
  }
}
