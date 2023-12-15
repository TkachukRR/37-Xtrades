import { Component, Input } from '@angular/core';
import { Image } from "../../interfaces/image";

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent {
  @Input() title = ''
  @Input() participants: Image[] = []
 }
