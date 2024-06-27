import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-post-job",
  standalone: true,
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: "./post-job.component.html",
  styleUrls: ["./post-job.component.css"],
})
export class PostJobComponent {
  jobForm: FormGroup;
  skillsList: string[] = [
    "JavaScript",
    "HTML",
    "CSS",
    "Angular",
    "React",
    "Node.js",
    "Python",
    "Next.js",
    "vue",
  ];
  requirementsList: string[] = [
    "Bachelor's Degree",
    "2+ years experience",
    "Team player",
    "Good communication skills",
  ];

  constructor(private fb: FormBuilder, private hhtpClient: HttpClient) {
    this.jobForm = this.fb.group({
      companyName: new FormControl("Envato.", [Validators.required]),
      JobTitle: new FormControl("", [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
      ]),
      JobCategory: new FormControl([], [Validators.required]),
      JobSubCategory: new FormControl(["other"]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(1000),
      ]),
      JobType: new FormControl("Part-Time", [Validators.required]),
      salary: new FormGroup({
        from: new FormControl(""),
        to: new FormControl(""),
      }),
      skills: new FormControl([]),
      JobHours: new FormGroup({
        from: new FormControl(""),
        to: new FormControl(""),
      }),

      jobLocation: this.fb.group({
        State: new FormControl("", [Validators.required]),
        government: new FormControl("", [Validators.required]),
      }),
      JoblocationType: new FormControl("", [Validators.required]),
      jobLevel: new FormControl("", [Validators.required]),
      jobRequirements: new FormControl([]),
      status: new FormControl("Open", [Validators.required]),

      companyId: new FormControl("6664032cff0e9fda232e5cc4", [
        Validators.required,
      ]),
    });
  }

  addJob() {
    const jobData = {
      ...this.jobForm.value,
    };

    this.hhtpClient
      .post<any>(`${environment.baseUrl}/jobs/create`, jobData)
      .subscribe({
        next: (response) => {
          console.log("Job added successfully:", response);
          alert("Job added successfully");
        },
        error: (error) => {
          console.error("Error adding job:", error);
        },
      });

    return false;
  }
}
