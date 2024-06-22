import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/SideBar/sidebar/sidebar.component'
import { ApplicantCardComponent } from '../../../components/applicantsCard/applicant-card/applicant-card.component'
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-companyapplicants',
  standalone: true,
  imports: [ RouterOutlet,SidebarComponent ,ApplicantCardComponent],

templateUrl: './companyapplicants.component.html',
  styleUrl: './companyapplicants.component.css'
})
export class CompanyapplicantsComponent {

}
