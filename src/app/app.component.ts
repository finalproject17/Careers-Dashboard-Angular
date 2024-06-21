import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicantsComponent } from './components/applicants/applicants.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ApplicantsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Careers-Angular-Dashboard';
}
