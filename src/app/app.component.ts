import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CardService } from './services/card.service';
import { Card } from './models/card.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private cardService = inject(CardService);
  public cards: Card[] = this.cardService.getCards();
  public cardAtual = signal(0);

  avancar(): void {
    if (this.cardAtual() === this.cards.length - 1) {
      this.cardAtual.set(0);
    } else {
      this.cardAtual.update(i => i + 1);
    }
  }

  voltar(): void {
    if (this.cardAtual() === 0) {
      this.cardAtual.set(this.cards.length - 1);
    } else {
      this.cardAtual.update(i => i - 1);
    }
  }
}
