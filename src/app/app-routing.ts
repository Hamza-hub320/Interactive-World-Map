import { Routes, RouterModule } from '@angular/router';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  { path: '', component: WorldComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
