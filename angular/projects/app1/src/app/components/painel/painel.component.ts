import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Phrase } from 'src/app/shared/phrase.model';
import { phrases } from './phrase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
})
export class PainelComponent implements OnInit, OnDestroy {
  public Phrases: Phrase[] = phrases;
  rodada: number = 0;
  rodadaFase: Phrase = { phraseEng: '', phrasePt: '' };

  typed: string = '';

  public progress: number = 0;
  public tries: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    console.log('componente painel foi destruido');
  }

  updateTextTyped(text: Event) {
    const target = text.target as HTMLInputElement;
    this.typed = target.value;
  }

  check(): void {
    const fraseRodada = this.rodadaFase.phrasePt.toLowerCase();
    const typed = this.typed.toLowerCase();
    if (fraseRodada === typed) {
      this.rodada++;
      this.progress = this.progress + 100 / this.Phrases.length;
      console.log('progresso', this.progress);
      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
        return;
      }

      this.atualizaRodada();
    } else {
      this.tries--;
      if (this.tries === 0) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  atualizaRodada(): void {
    this.rodadaFase = this.Phrases[this.rodada];
    this.typed = '';
  }
}
