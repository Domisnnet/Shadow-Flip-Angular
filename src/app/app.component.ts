import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardService } from './services/card.service';
import { Card } from './models/card.model';
import { SlideComponent } from './component/slide/slide.component'; // Importa o SlideComponent

@Component({
  selector: 'app-root',
  // Adiciona o SlideComponent aos imports
  imports: [SlideComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private cardService = inject(CardService);
  public cards: Card[] = this.cardService.getCards();
}
