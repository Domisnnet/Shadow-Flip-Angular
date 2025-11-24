import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  card = input.required<any>();
  cardIndex = input.required<number>();
}
