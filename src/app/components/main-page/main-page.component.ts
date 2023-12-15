import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { StatisticComponent } from "../satistic/statistic.component";
import { Image } from "../../interfaces/image";
import { UserService } from "../../services/user.service";
import { UserStatistic } from "../../interfaces/user-statistic";
import { Subscription } from "rxjs";
import { Winner } from "../../interfaces/winner";
import { Title } from "../../custom/statistic-title.enum";

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
  winnerWeeklyChallenges: Winner = {} as Winner;
  doubleGainWeekContest: UserStatistic[] = [];
  winnerDoubleGainWeekContest: Winner = {} as Winner;


  ngOnInit(): void {
    this.subs.push(this._us.getParticipants().subscribe(participants => this.participants = participants));
    this.subs.push(this._us.getWeeklyChallenges().subscribe(statistic => this.weeklyChallenges = statistic));
    this.subs.push(this._us.getWinnerWeeklyChallenges().subscribe(w => this.winnerWeeklyChallenges = w));
    this.subs.push(this._us.getDoubleGainWeekContest().subscribe(statistic => this.doubleGainWeekContest = statistic));
    this.subs.push(this._us.getWinnerDoubleGainWeekContest().subscribe(w => this.winnerDoubleGainWeekContest = w));
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  protected readonly Title = Title;
}
