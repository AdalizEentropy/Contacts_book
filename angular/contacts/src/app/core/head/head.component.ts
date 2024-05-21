import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {
  @Input() totalUsers: number | undefined

}
