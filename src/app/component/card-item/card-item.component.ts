import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  standalone: true,
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() cards: any[] = [];
  @Input() index: number = 0;
  @Input() card: any;
}