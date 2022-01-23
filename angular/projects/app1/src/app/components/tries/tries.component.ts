import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { HeartModel } from 'src/app/shared/heart.model';

@Component({
  selector: 'app-tries',
  templateUrl: './tries.component.html',
  styleUrls: ['./tries.component.scss'],
})
export class TriesComponent implements OnInit, OnChanges {
  public hearts: HeartModel[] = [
    new HeartModel(true),
    new HeartModel(true),
    new HeartModel(true),
  ];

  @Input() public triesChild: number = 0;

  constructor() {}

  //usado para capturar as mudanças de um valor recebido pelo decorator do elemento pai
  ngOnChanges(changes: SimpleChanges): void {
    if (this.triesChild !== this.hearts.length) {
      let indice = this.hearts.length - this.triesChild;
      this.hearts[indice - 1].full = false;
    }
  }

  ngOnInit(): void {}
}
