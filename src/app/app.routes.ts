import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Install } from './install/install';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'install', component: Install },
  { path: '**', component: Home }
];
