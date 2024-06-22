
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home/home.component';
import { AboutUsComponent } from './pages/PostJob/AboutUs/about-us/about-us.component';
import { PostJobComponent } from './pages/PostJob/post-job/post-job.component';
import { CompanyapplicantsComponent } from './pages/CompanyApplicants/companyapplicants/companyapplicants.component';
import { CandidatesComponent } from './pages/Candidates/candidates/candidates.component';
import { NotfoundComponent } from './pages/NotFound/notfound/notfound.component';
import { MyProfileComponent } from './pages/MyProfile/my-profile/my-profile.component';
import { MyJobsComponent } from './pages/MyJobs/my-jobs/my-jobs.component';
import { SavedCandidatesComponent } from './pages/SavedCadidates/saved-candidates/saved-candidates.component';
import { SettingComponent } from './pages/Setting/setting/setting.component';
import { ApplicationsComponent } from './pages/Applications/applications/applications.component';
import { DashboardComponent } from './pages/Dashboard/dashboard/dashboard.component';
import { ApplicantsCardGroupComponent } from './components/applicantsCardGroup/applicants-card-group/applicants-card-group.component';
import { JobsComponent } from '../Components/jobs/jobs.component';


export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'home',component:HomeComponent},
    
    {path:'aboutus',component:AboutUsComponent}
    ,
    { path: 'companycandidates',component:CompanyapplicantsComponent,
        children:[{path:'dashboard',component:DashboardComponent
    },{path:'postJob',component:PostJobComponent},{path:'applicantcards',component:ApplicantsCardGroupComponent},
    {path:'editprofile',component:MyProfileComponent} ,
    {path:'savedcandidates',component:SavedCandidatesComponent},
    {
        path:'myJobs',component:MyJobsComponent
      },{
        path:'setting',component:SettingComponent
    },
                    {path: "jobs", component: JobsComponent}
]},
    
    
    {path:'candidates',component:CandidatesComponent},
    
        {
            path:'**',component:NotfoundComponent
        }
];

