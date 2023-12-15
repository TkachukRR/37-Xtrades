import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { StatisticComponent } from "../satistic/statistic.component";
import { Image } from "../../interfaces/image";
import { UserService } from "../../services/user.service";
import { UserStatistic } from "../../interfaces/user-statistic";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    TopBarComponent,
    StatisticComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit, OnDestroy{
  private _us = inject(UserService);
  private subs: Subscription[] = [];
  participants: Image[] = [];
  weeklyChallenges: UserStatistic[] = [];

  ngOnInit(): void {
    this.subs.push(this._us.getParticipants().subscribe(participants => this.participants = participants));
    this.subs.push(this._us.getWeeklyChallenges().subscribe(statistic => this.weeklyChallenges = statistic));
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }
}
