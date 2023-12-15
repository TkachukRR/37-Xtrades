import { Component, inject, OnInit } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { StatisticComponent } from "../satistic/statistic.component";
import { Image } from "../../interfaces/image";
import { UserService } from "../../services/user.service";

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
export class MainPageComponent implements OnInit{
  private _us = inject(UserService);
  participants: Image[] = [];

  ngOnInit(): void {
    this._us.getParticipants().subscribe(participants => this.participants = participants)
  }
}
