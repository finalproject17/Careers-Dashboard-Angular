import { Component, OnInit } from '@angular/core';
import { ApplicantDetailsService } from '../../services/applicant-details.service';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../../models/iuser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applicants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applicants.component.html',
  styleUrl: './applicants.component.css'
})
export class ApplicantsComponent implements OnInit {
  aplliedUserId: string|null = null;
  applidUser: Iuser | null = null;
  constructor(private _applicantDetailsService: ApplicantDetailsService,private _activedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    // this.apllicanId = this._activedRoute.snapshot.paramMap.get('id');
    this.aplliedUserId = "66738294d577e035e9bcb93c";
    this._applicantDetailsService.getAppliedUserById(this.aplliedUserId).subscribe({
      next: (res) => {
        this.applidUser = res;
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
  
}
