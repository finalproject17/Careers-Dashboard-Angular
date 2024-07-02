import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { JobsApiService } from '../../services/jobs-api.service';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Jobs } from '../../models/jobs';

@Component({
  selector: 'app-update-job',
  standalone: true,
  imports: [CommonModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {
  jobId: string | null = '667ed545c7344cc792f543b2';
  Job: Jobs | null = null;
  requirementsList: string[] = [
    "Bachelor's Degree",
    "2+ years experience",
    "Team player",
    "Good communication skills",
  ];

  constructor(
    private _jobsApiService: JobsApiService,
    private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ){}


  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.jobId = params.get("id");
      if (this.jobId) {
        this._jobsApiService.getJobById(this.jobId).subscribe({
          next: (res) => {
            this.Job = res;
     
          },
          error: (err) => {
            console.log(err, "job not found");
          }
        });
      }
    })
  }



}
