import { Component } from '@angular/core';
import { CompanyProfileComponent } from '../../components/company-profile/company-profile.component';
import {ApplicantsComponent} from '../../components/applicants/applicants.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CompanyProfileComponent,ApplicantsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
