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
  public cardVirado = signal(false);

  virarCard(): void {
    this.cardVirado.update(v => !v);
  }

  avancar(): void {
    this.cardVirado.set(false); // Reseta o flip
    if (this.cardAtual() === this.cards.length - 1) {
      this.cardAtual.set(0);
    } else {
      this.cardAtual.update(i => i + 1);
    }
  }

  voltar(): void {
    this.cardVirado.set(false); // Reseta o flip
    if (this.cardAtual() === 0) {
      this.cardAtual.set(this.cards.length - 1);
    } else {
      this.cardAtual.update(i => i - 1);
    }
  }
}
