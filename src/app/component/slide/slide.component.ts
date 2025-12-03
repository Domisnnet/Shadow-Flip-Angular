import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CardService } from '../../services/card.service';
import { CardItemComponent } from '../card-item/card-item.component';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  imports: [CardItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideComponent {
  private cardService = inject(CardService);
  public cards: Card[] = this.cardService.getCards();

  // O currentIndex agora é um sinal
  public currentIndex = signal(0);

  // O selectedCard é um sinal computado, derivado do currentIndex
  public selectedCard = computed(() => this.cards[this.currentIndex()]);

  previous(): void {
    // Atualiza o sinal para o item anterior, com limite em 0
    this.currentIndex.update(index => (index > 0 ? index - 1 : 0));
  }

  next(): void {
    // Atualiza o sinal para o próximo item, com limite no final da lista
    this.currentIndex.update(index => (index < this.cards.length - 1 ? index + 1 : index));
  }
}
