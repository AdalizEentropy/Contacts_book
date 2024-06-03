import { Component, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  public totalUsers: number | undefined = this.usersService.getTotalUsers();
  @Output() namePage: EventEmitter<string> = new EventEmitter();

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.totalUsers = this.usersService.getTotalUsers(), 1000;
    });
  }
}
