import { Component } from '@angular/core';
import { WorldComponent } from './world/world.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WorldComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world-map-project';
}
