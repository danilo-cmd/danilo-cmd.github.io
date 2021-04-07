import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  //TODO fare una ugualianza tra il parametro che contiene il giocatore vincitore e un parametro nullo
  //per disabilitare i tasselli di gioco
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" [disabled]="winnerPlayer != null" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" [disabled]="winnerPlayer != null" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important;background-color: #DA70D6;color: white; }']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';
  @Input() winnerPlayer: string;
  constructor() { }

}
