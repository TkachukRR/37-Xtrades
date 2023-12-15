import { Component } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { SatisticComponent } from "../satistic/satistic.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    TopBarComponent,
    SatisticComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
