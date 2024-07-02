import { Component, OnChanges, OnInit } from '@angular/core';
import { JobsApiService } from '../../services/jobs-api.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit , OnChanges{
  showIcons: boolean = false;
  jobs !: any[];
  constructor(private _jobsApiService: JobsApiService){

  }


  ngOnInit(): void {
    const companyInfo= localStorage.getItem('companyInfo');
    console.log(companyInfo)
    
    if (companyInfo) {
      const company = JSON.parse(companyInfo);
      this._jobsApiService.getJobsByCompanyId(company.id).subscribe({
        next: (res) => {
          console.log(res);
          this.jobs = res.jobs;
        },
      });
    }

    // this._jobsApiService.getJobsByCompanyId("6664032cff0e9fda232e5cc4").subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this.jobs = res.jobs;
    //   },
    // });
    
    // this._jobsApiService.getAllJobs().subscribe({
    //   next : (res)=>{
    //    console.log(res)
    //   this.jobs = res.jobs
    //   }
    // })

  }

  ngOnChanges(): void {
      
  }

  deleteJob(id:string){

    this._jobsApiService.deleteJob(id).subscribe({
      next: (res)=>{
        // console.log(res)
        alert(res.message)
      }
    })
  }

  
  toggleIcons() {
    this.showIcons = !this.showIcons;
  }

}
