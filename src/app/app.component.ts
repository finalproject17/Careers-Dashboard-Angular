import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyapplicantsComponent } from './pages/CompanyApplicants/companyapplicants/companyapplicants.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CompanyapplicantsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Careers-Angular-Dashboard';
}
