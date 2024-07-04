import { Component } from '@angular/core';
import { JobServiceService } from '../../../services/job-service.service';
import { Jobs } from '../../../models/jobs';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: '-applicanappts-card-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applicants-card-group.component.html',
  styleUrl: './applicants-card-group.component.css',
})
export class ApplicantsCardGroupComponent implements OnInit {
  appliedUsers: any[] = [];
  salary = 300;
  jobId: string | null = '60c72b2f9b1d4c23b8b2b6c8';
  loading: boolean = true;
  page: number = 1;
  limit: number = 6;
  totalPages: number = 1;
  totalItems: number = 0;

  constructor(
    private jobService: JobServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.jobId = paramMap.get('jobId');
      if (this.jobId) {
        this.fetchApplicants();
      }
    });
  }

  fetchApplicants() {
    this.loading = true;
    this.jobService.getJobById(this.jobId, this.page, this.limit).subscribe(
      (response) => {
        console.log('Response from server:', response);  // Log the full response

        if (response && response.data) {
          this.appliedUsers = response.data;
          this.totalItems = response.totalItems;
          this.totalPages = response.totalPages;
          this.page = response.currentPage;
          console.log('Applied Users:', this.appliedUsers);
        } else {
          console.error('Invalid response format or no data returned');
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching applied users:', error);
        this.loading = false;
      }
    );
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.fetchApplicants();
    }
  }

  prvPage() {
    if (this.page > 1) {
      this.page--;
      this.fetchApplicants();
    }
  }



  goToPage(page: number) {
    if (page !== this.page) {
      this.page = page;
      this.fetchApplicants();
    }
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}