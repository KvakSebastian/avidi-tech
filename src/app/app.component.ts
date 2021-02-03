import { Component } from '@angular/core';
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-root',
  animations: [fadeAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avidi-tech-task';
}
