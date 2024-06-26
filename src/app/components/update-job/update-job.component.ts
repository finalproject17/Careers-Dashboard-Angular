import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobsApiService } from '../../services/jobs-api.service';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from '../../models/jobs/jobs';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-update-job',
  standalone: true,
  imports: [CommonModule, MatSelectModule,FormsModule],
  templateUrl: './update-job.component.html',
  styleUrl: './update-job.component.css'
})
export class UpdateJobComponent {
jobId: string | null = null;
  Job: Jobs | null = null;
  skill: string = '';
 
  requirementsList: string[] = [
    "Bachelor's Degree",
    "2+ years experience",
    "Team player",
    "Good communication skills",
  ];

  constructor(private _jobsApiService: JobsApiService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.jobId = params.get("id");
      if (this.jobId) {
        this._jobsApiService.getJobById(this.jobId).subscribe({
          next: (res) => {
            this.Job = res;
            console.log(res," madonna gotit the job");
          },
          error: (err) => {
            console.log(err, "job not found");
          }
        });
        console.log(this.Job, this.jobId);
      }
    })
  }
}
