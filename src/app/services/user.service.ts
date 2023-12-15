import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from "rxjs";
import { User } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Image } from "../interfaces/image";
import { UserStatistic } from "../interfaces/user-statistic";
import { Winner } from "../interfaces/winner";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _http = inject(HttpClient);
  private baseMockedDataUrl = 'assets/mock-data/'; //TODO Change to real API

  private userSubj = new BehaviorSubject({} as User);
  private user$ = this.userSubj.asObservable();

  private loadingUserDataSubj = new BehaviorSubject(true);
  private loadingUserData$ = this.loadingUserDataSubj.asObservable()
  constructor() {
    this.fetchUserInfo()
  }

  fetchUserInfo(): void{
    if (!this.loadingUserDataSubj.value) this.loadingUserDataSubj.next(true)

    this._http.get<User>( this.baseMockedDataUrl + 'user.json').pipe(
      delay(2000) //TODO emulation server delay (delete)
    ).subscribe(user => {
      this.loadingUserDataSubj.next(false)
      this.userSubj.next(user)
    })
  }

  getUserInfo(): Observable<User>{
    return this.user$
  }

  getLoadingUserDataStatus(): Observable<boolean> {
    return this.loadingUserData$
  }

  getParticipants(): Observable<Image[]> {
    return this._http.get<Image[]>(this.baseMockedDataUrl + 'participants.json')
  }

  getWeeklyChallenges(): Observable<UserStatistic[]> {
    return this._http.get<UserStatistic[]>(this.baseMockedDataUrl + 'weekly-challenges.json')
  }

  getWinnerWeeklyChallenges(): Observable<Winner>{
    return this._http.get<Winner>(this.baseMockedDataUrl + 'winner-weekly-challenges.json')
  }

  getDoubleGainWeekContest(): Observable<UserStatistic[]> {
    return this._http.get<UserStatistic[]>(this.baseMockedDataUrl + 'double-gain-week-contest.json')
  }

  getWinnerDoubleGainWeekContest(): Observable<Winner>{
    return this._http.get<Winner>(this.baseMockedDataUrl + 'winner-double-gain-week-contest.json')
  }
}
