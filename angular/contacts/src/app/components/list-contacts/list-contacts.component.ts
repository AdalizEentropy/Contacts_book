import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrl: './list-contacts.component.scss'
})
export class ListContactsComponent {

  @Input() users: any
}
