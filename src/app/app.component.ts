import { UpdateJobComponent } from './components/update-job/update-job.component';
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ApplicantsComponent } from "./components/applicants/applicants.component";
// import { JobsApiService } from '../Services/jobs-api.service';
import { CommonModule, NgFor } from "@angular/common";
import { JobsComponent } from "./components/jobs/jobs.component";
import { PostJobComponent } from "./components/post-job/post-job.component";
import { CompanyapplicantsComponent } from "./pages/CompanyApplicants/companyapplicants/companyapplicants.component";
import {FormsModule} from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    CommonModule,
    JobsComponent,
    PostJobComponent,
    CompanyapplicantsComponent,
    ApplicantsComponent,
    UpdateJobComponent,
    FormsModule
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Careers-Angular-Dashboard";
}
