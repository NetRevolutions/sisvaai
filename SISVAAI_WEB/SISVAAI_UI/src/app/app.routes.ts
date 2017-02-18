import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


export const ROUTES: Routes = [{
   path: '', redirectTo: 'app', pathMatch: 'full'
  }, {
    path: 'app',   loadChildren: () => System.import('./layout/layout.module')
  }, {
    path: 'login', loadChildren: () => System.import('./login/login.module')
  }, {
    path: 'simulator', loadChildren: () => System.import('./sisvaai/simulator/simulator.module')
  }, {
    path: 'simulator/:userName', loadChildren: () => System.import('./sisvaai/simulator/simulator.module')
  }, {
    path: 'error', component: ErrorComponent
  }, {
    path: '**',    component: ErrorComponent
  }
];
