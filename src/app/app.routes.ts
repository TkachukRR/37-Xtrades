import { Routes } from '@angular/router';
import { MainPageComponent } from "./components/main-page/main-page.component";
import { ErrorPageComponent } from "./components/error-page/error-page.component";

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'error', component: ErrorPageComponent},
  { path: '**', redirectTo: '' }
];
