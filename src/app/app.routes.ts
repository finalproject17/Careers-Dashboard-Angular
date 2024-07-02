import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutUsComponent } from "./pages/PostJob/AboutUs/about-us/about-us.component";
import { PostJobComponent } from "./pages/PostJob/post-job/post-job.component";
import { CompanyapplicantsComponent } from "./pages/CompanyApplicants/company/companyapplicants.component";
import { CandidatesComponent } from "./pages/Candidates/candidates/candidates.component";
import { NotfoundComponent } from "./pages/NotFound/notfound/notfound.component";
import { MyProfileComponent } from "./pages/MyProfile/my-profile/my-profile.component";
import { SavedCandidatesComponent } from "./pages/SavedCadidates/saved-candidates/saved-candidates.component";
import { SettingComponent } from "./pages/Setting/setting/setting.component";
import { ApplicationsComponent } from "./pages/Applications/applications/applications.component";
import { DashboardComponent } from "./pages/Dashboard/dashboard/dashboard.component";
import { ApplicantsCardGroupComponent } from "./components/applicantsCardGroup/applicants-card-group/applicants-card-group.component";
import { JobsComponent } from "./components/jobs/jobs.component";
import { RegisterComponent } from "./components/register/register.component";
import { RegisterTwoComponent } from "./components/register-two/register-two.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { PasswordComponent } from "./components/password/password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { UpdateJobComponent } from "./components/update-job/update-job.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },

  { path: "aboutus", component: AboutUsComponent },
  {
    path: "company/:companyId",
    component: CompanyapplicantsComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "postJob", component: PostJobComponent },
      {
        path: "applicantcards/:jobId",
        component: ApplicantsCardGroupComponent,
      },
      { path: "editprofile", component: MyProfileComponent },
      { path: "savedcandidates", component: SavedCandidatesComponent },
      {
        path: "myJobs",
        component: JobsComponent,
      },
      { path: 'update-job/:id', component: UpdateJobComponent },
      {
        path: "setting",
        component: SettingComponent,
      },
    ],
  },
  { path: "candidates", component: CandidatesComponent },
  { path: "register", component: RegisterComponent },
  { path: "two", component: RegisterTwoComponent },
  { path: "sign", component: SignInComponent },
  { path: "pass", component: PasswordComponent },
  { path: "rest", component: ResetPasswordComponent },
  {
    path: "**",
    component: NotfoundComponent,
  },
];
