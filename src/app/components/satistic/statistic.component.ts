import { Component, Input } from '@angular/core';
import { NgForOf, NgIf, TitleCasePipe, UpperCasePipe } from "@angular/common";
import { Image } from "../../interfaces/image";

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [
    TitleCasePipe,
    UpperCasePipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent {
  @Input() title = ''
  @Input() participants: Image[] = []
}
