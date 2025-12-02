import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { WorkDetailComponent } from './pages/work-detail/work-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works', component: WorksComponent },
  { path: 'works/:id', component: WorkDetailComponent },
  { path: '**', redirectTo: '' }
];