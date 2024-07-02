// additional-questions.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms'; // Import FormBuilder and FormGroup for reactive forms
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-additional-questions',
  standalone: true,
  imports:[ReactiveFormsModule, CommonModule],
  templateUrl: './additional-questions.component.html',
  styleUrls: ['./additional-questions.component.css']
})
export class AdditionalQuestionsComponent implements OnInit {
  jobId: string | null = null;
  additionalQuestionsForm!: FormGroup; 

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder ,
    private httpClient : HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.jobId = id;
        
      } else {
        console.log('the id is not found');
      }
    });

    // Initialize FormGroup and FormControls
    this.additionalQuestionsForm = this.fb.group({
      jobId:[this.jobId ,Validators.required],
      FirstQuestion: ['', Validators.required],
      SecondQuestion: ['', Validators.required],
      ThirdQuestion: ['', Validators.required],
      FourthQuestion: ['', Validators.required]
    });
  }

  onSubmit() {
      const formData = {
        ...this.additionalQuestionsForm.value,
      };
      this.httpClient.post<any>(`${environment.baseUrl}/additionalQuestions`, formData).subscribe({
        next:(response)=>{
          console.log(response)
          alert("Questions added  successfully!")
        },
        error:(error)=>{
          console.log(error)
        }
      })
  }
}
