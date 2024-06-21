import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { JobsApiService } from '../Services/jobs-api.service';
import { CommonModule, NgFor } from '@angular/common';
import { JobsComponent } from '../Components/jobs/jobs.component';
import { PostJobComponent } from '../Components/post-job/post-job.component';
// import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor,CommonModule,JobsComponent,PostJobComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Careers-Angular-Dashboard';
  

  
}
