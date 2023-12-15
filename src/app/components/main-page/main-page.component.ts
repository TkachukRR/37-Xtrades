import { Component } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    TopBarComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
