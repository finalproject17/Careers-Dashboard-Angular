import { Routes } from '@angular/router';
import { PostJobComponent } from '../Components/post-job/post-job.component';
import { JobsComponent } from '../Components/jobs/jobs.component';

export const routes: Routes = [

    {path:"postJob", component: PostJobComponent},
    {path: "jobs", component: JobsComponent}
];
