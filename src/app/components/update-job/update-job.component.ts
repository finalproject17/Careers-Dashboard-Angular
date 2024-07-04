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
  imports: [CommonModule, MatSelectModule, FormsModule , ReactiveFormsModule],
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {
  jobId: string | any = ' ';
  job: Jobs  = {} as Jobs;
   newSkill: string = '';
  newRequirement: string = '';
  isUpdated: boolean = false;

  constructor(
    private _jobsApiService: JobsApiService,
    private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      console.log("params",params);
      
      this.jobId = params.get("id");
      console.log(this.jobId);
      
      if (this.jobId) {
        this._jobsApiService.getJobById(this.jobId).subscribe({
          next: (res) => {
            this.job = res;
            console.log('flaage',this.job);
          },
          error: (err) => {
            console.log(err, "job not found");
          }
        });
      }
    });
  }



 updateJob(formValue: any) {
   console.log('Updated Job Details:', formValue);
   this._jobsApiService.updateJob(this.jobId, this.job).subscribe({
     next: (res) => {
       console.log('job update success', res);
       formValue = {};
       this.isUpdated = true;
          },
          error: (err) => {
            console.log(err, "job not found");
          }
   })
  }

  addSkill() {
    if (this.newSkill && !this.job.skills.includes(this.newSkill)) {
      this.job.skills.push(this.newSkill);
      this.newSkill = '';
    }
    console.log(this.newSkill,this.job.skills);
  }

  removeSkill(skill: string) {
    this.job.skills = this.job.skills.filter((s: string) => s !== skill);
  }
 addRequirement() {
    if (this.newRequirement && !this.job.jobRequirements.includes(this.newRequirement)) {
      this.job.jobRequirements.push(this.newRequirement);
      this.newRequirement = '';
    }
  }
  removeRequirement(requirement: string) {
    this.job.jobRequirements = this.job.jobRequirements.filter((r: string) => r !== requirement);
  }
}