import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';

@Component({
  selector: 'company-profile',
  standalone: true,
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class CompanyProfileComponent implements OnInit {
  selectedCompany?: Company;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanyProfile();
  }

  loadCompanyProfile(): void {
    const companyInfo = localStorage.getItem('companyInfo');
    if (companyInfo) {
      const companyData = JSON.parse(companyInfo);
      const companyId = companyData.id;
      console.log('Company ID from localStorage:', companyId);

      this.companyService.getCompanyById(companyId).subscribe(
        (response: any) => {
          if (response.message === 'success' && response.data) {
            this.selectedCompany = response.data;
            console.log('Company data fetched:', this.selectedCompany);
          } else {
            console.error('Unexpected response format:', response);
          }
        },
        (error) => {
          console.error('Error fetching company data:', error);
        }
      );
    } else {
      console.warn('No company info found in localStorage');
    }
  }
}
