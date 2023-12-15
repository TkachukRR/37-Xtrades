import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { User } from "../../interfaces/user";
import { NgClass, NgIf, NgStyle } from "@angular/common";
import { UserService } from "../../services/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgStyle
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit, OnDestroy{
  private _us = inject(UserService);
  private subs: Subscription[] = []
  user!: User;
  loading = true;

  ngOnInit(): void {
    this.subs.push(this._us.getUserInfo().subscribe(user => this.user = user));
    this.subs.push(this._us.getLoadingUserDataStatus().subscribe(
      status => this.loading = status
    ))
  }

  onAddNew(): void {
    //TODO add logic
  }

  ngOnDestroy(): void {
    this.subs.forEach( sub => sub.unsubscribe())
  }
}
