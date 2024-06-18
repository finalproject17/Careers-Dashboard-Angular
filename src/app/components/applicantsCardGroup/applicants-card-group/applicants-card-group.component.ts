import { Component } from '@angular/core';
import { ApplicantCardComponent } from '../../applicantsCard/applicant-card/applicant-card.component'

@Component({
  selector: 'app-applicants-card-group',
  standalone: true,
  imports: [ApplicantCardComponent],
  templateUrl: './applicants-card-group.component.html',
  styleUrl: './applicants-card-group.component.css'
})
export class ApplicantsCardGroupComponent {

}
