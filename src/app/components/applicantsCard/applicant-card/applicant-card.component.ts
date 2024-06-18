import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-applicant-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.css']
})
export class ApplicantCardComponent implements OnChanges, AfterViewInit {

  salary: number = 300;
  showCard: boolean = true;

  @ViewChild('card', { static: false }) card!: ElementRef;

  ngOnChanges(): void {
    console.log("on changes called");
    this.removeCard();
  }

  ngAfterViewInit(): void {
    // You can manipulate the DOM here using this.card.nativeElement
  }

  removeCard() {
    this.showCard = false;
  }
}
