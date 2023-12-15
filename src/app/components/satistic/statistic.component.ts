import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgClass, NgForOf, NgIf, NgStyle, TitleCasePipe, UpperCasePipe } from "@angular/common";
import { Image } from "../../interfaces/image";
import { UserStatistic } from "../../interfaces/user-statistic";
import { OrdinalPipe } from "../../custom/ordinal.pipe";
import { Winner } from "../../interfaces/winner";
import { Title } from "../../custom/statistic-title.enum";

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [
    TitleCasePipe,
    UpperCasePipe,
    NgIf,
    NgForOf,
    CurrencyPipe,
    NgStyle,
    NgClass,
    OrdinalPipe
  ],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent {
  @Input() title: Title | '' = '';
  @Input() participants: Image[] = [];
  @Input() statistics: UserStatistic[] = [];
  @Input() winner: Winner = {} as Winner;
  protected readonly Title = Title;
}
