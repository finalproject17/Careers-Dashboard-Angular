import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-applicant-card',
  standalone: true,
  imports: [CommonModule, FormsModule ,RouterLink],
 
templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.css']
})
export class ApplicantCardComponent {

  salary: number = 300;
  showCard: boolean = true;

  @ViewChild('card', { static: false }) card!: ElementRef;

  ngOnChanges(): void {
    console.log("on changes called");
    this.removeCard();
  }

  ngAfterViewInit(): void {
   
  }

  removeCard() {
    this.showCard = false;
  }
}
